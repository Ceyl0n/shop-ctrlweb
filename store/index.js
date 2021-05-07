export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit(context, app) {
    try {
      await Promise.all([
        context.dispatch('shop/products/fetchProducts'),
        context.dispatch('shop/sections/fetchSections')
      ]);
    } catch (e) {}

    if (app.route.query) {
      if (app.route.query.sort)
        context.dispatch('shop/products/setFilter', app.route.query.sort);

      if (app.route.query.section)
        context.dispatch(
          'shop/sections/selectSection',
          Number(app.route.query.section)
        );
    }
  }
};
