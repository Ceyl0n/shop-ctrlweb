export const state = () => ({
  products: [],

  sortedProducts: [],

  selectedFilter: 'name__asc',
  filterOptions: [
    { text: 'По возрастанию цены', value: 'price__asc' },
    { text: 'По убыванию цены', value: 'price__desc' },
    { text: 'По имени (А -> Я)', value: 'name__asc' },
    { text: 'По имени (Я -> А)', value: 'name__desc' }
  ]
});

export const getters = {
  sortedProducts(state) {
    const products = state.sortedProducts.map(i => ({ ...i }));

    if (state.selectedFilter === 'price__asc')
      return products.sort(function(a, b) {
        if (a.price < b.price) return -1;
        if (a.price > b.price) return 1;
        return 0;
      });

    if (state.selectedFilter === 'price__desc')
      return products.sort(function(a, b) {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
        return 0;
      });

    if (state.selectedFilter === 'name__asc')
      return products.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

    if (state.selectedFilter === 'name__desc')
      return products.sort(function(a, b) {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });

    return products;
  },

  favoriteProductsQuantity(state) {
    return state.products.reduce((sum, i) => sum + Number(i.favorite), 0);
  }
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
    state.sortedProducts = products;
  },

  SORT_BY_SECTION_ID(state, id) {
    state.sortedProducts = state.products.filter(
      i => i.section === id || i.parent_section === id
    );
  },

  SET_FILTER(state, filter) {
    state.selectedFilter = filter;
  },

  ADD_TO_WISHLIST(state, id) {
    state.products.forEach(i => {
      if (i.id === id) i.favorite = true;
    });
  },

  REMOVE_FROM_WISHLIST(state, id) {
    state.products.forEach(i => {
      if (i.id === id) i.favorite = false;
    });
  }
};

export const actions = {
  /**
   * Получаем список товаров
   * @return  void
   */
  async fetchProducts({ commit }) {
    await this.$axios
      .$get('/products')
      .then(res => commit('SET_PRODUCTS', res))
      .catch(err => []);
  },

  /**
   * Фильтрация товаров по ID категории
   * @param   Number  id
   * @return  void
   */
  sortBySectionId({ commit }, id) {
    commit('SORT_BY_SECTION_ID', id);
  },

  /**
   * Устанавливаем значение фильтра
   * @param   String  filter
   * @return  void
   */
  setFilter({ commit }, filter) {
    commit('SET_FILTER', filter);
  },

  /**
   * Добавляем товар в избранное
   * @param   Number  id
   * @return  void
   */
  addToWishlist({ commit }, id) {
    commit('ADD_TO_WISHLIST', id);
  },

  /**
   * Удаляем товар из избранного
   * @param   Number  id
   * @return  void
   */
  removeFromWishlist({ commit }, id) {
    commit('REMOVE_FROM_WISHLIST', id);
  }
};
