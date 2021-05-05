export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit(context) {
    try {
      await Promise.all([
        context.dispatch('shop/products/fetchProducts'),
        context.dispatch('shop/sections/fetchSections')
      ]);
    } catch (e) {}
  }
};
