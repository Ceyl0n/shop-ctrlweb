export const state = () => ({
  cart: []
});

export const getters = {
  cartProductsQuantity(state) {
    return state.cart.length;
  },

  productInCart: state => id => {
    return state.cart.indexOf(id) !== -1;
  },

  amountCart(state, getters, rootState) {
    let amount = 0;
    rootState.shop.products.products.forEach(i => {
      if (state.cart.indexOf(i.id) !== -1) amount += i.price;
    });

    return amount;
  }
};

export const mutations = {
  ADD_TO_CART(state, id) {
    if (state.cart.indexOf(id) === -1) state.cart.push(id);
  },

  REMOVE_FROM_CART(state, id) {
    const index = state.cart.indexOf(id);
    if (index !== -1) state.cart.splice(index, 1);
  }
};

export const actions = {
  /**
   * Добавляем товар в корзину
   * @param   Number  id
   * @return  void
   */
  addToCart({ commit }, id) {
    commit('ADD_TO_CART', id);
  },

  /**
   * Удаляем товар из корзины
   * @param   Number  id
   * @return  void
   */
  removeFromCart({ commit }, id) {
    commit('REMOVE_FROM_CART', id);
  }
};
