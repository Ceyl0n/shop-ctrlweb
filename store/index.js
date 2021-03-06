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
      if (app.route.query.page)
        context.dispatch('shop/products/setPage', app.route.query.page);

      if (app.route.query.sort)
        context.dispatch('shop/products/setFilter', app.route.query.sort);

      if (app.route.query.section) {
        context.dispatch(
          'shop/sections/selectSection',
          Number(app.route.query.section)
        );
        context.dispatch(
          'shop/products/sortBySectionId',
          Number(app.route.query.section)
        );
      }
    }
  }
};
