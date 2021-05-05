export const state = () => ({
  products: []
});

export const getters = {};

export const mutations = {
  SET_PRODUCTS: (state, products) => (state.products = products),

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

  // /**
  //  * Выбрать категорию
  //  * @return  void
  //  */
  // selectSection({ commit }, id) {
  //   commit('TOGGLE_SECTION', id);
  // },

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
