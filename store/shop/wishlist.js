export const state = () => ({
  wishlist: []
});

export const getters = {};

export const mutations = {
  ADD_TO_WISHLIST(state, id) {
    if (state.wishlist.indexOf(id) === -1) state.wishlist.push(id);
  },

  REMOVE_FROM_WISHLIST(state, id) {
    const index = state.wishlist.indexOf(id);
    if (index !== -1) state.wishlist.splice(index, 1);
  }
};

export const actions = {
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
