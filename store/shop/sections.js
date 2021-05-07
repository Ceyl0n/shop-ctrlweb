export const state = () => ({
  sections: []
});

export const getters = {
  selectedSection(state) {
    let section = {};

    const searchItem = i => {
      if (i.selected) section = Object.assign({}, i);
      if (i.childs && i.childs.length)
        return i.childs.forEach(j => searchItem(j));
    };

    state.sections.forEach(i => searchItem(i));

    return section;
  },

  selectedByParentId: state => id => {
    let section = {};

    const searchItem = i => {
      if (i.id === id) section = Object.assign({}, i);
      if (i.childs && i.childs.length)
        return i.childs.forEach(j => searchItem(j));
    };

    state.sections.forEach(i => searchItem(i));

    return section;
  },

  sectionBreadcrumbs(state, getters) {
    const breadcrumbs = [];
    const selected = getters['selectedSection'];
    if (Object.keys(selected).length) {
      breadcrumbs.push({ id: selected.id, name: selected.name });

      if (selected.parent) {
        let id = selected.parent;
        while (id) {
          const i = getters['selectedByParentId'](id);
          breadcrumbs.unshift({ id: i.id, name: i.name });
          id = i.parent ? i.parent : 0;
        }
      }
    }

    return breadcrumbs;
  }
};

export const mutations = {
  SET_SECTIONS: (state, sections) => (state.sections = sections),

  TOGGLE_SECTION(state, id) {
    state.sections.forEach(i => {
      if (i.id === id) i.opened = !i.opened;
    });
  },

  SELECT_SECTION(state, id) {
    const searchItem = i => {
      if (i.id === id) {
        i.selected = true;
        if (i.parent)
          state.sections.forEach(j => {
            if (j.id === i.parent) j.opened = true;
          });
      } else i.selected = false;
      if (i.childs && i.childs.length) i.childs.forEach(j => searchItem(j));
    };

    state.sections.forEach(i => searchItem(i));
  }
};

export const actions = {
  /**
   * Получаем список категорий
   * @return  void
   */
  async fetchSections({ commit }) {
    const sections = await this.$axios
      .$get('/sections')
      .then(res => res)
      .catch(err => []);

    const convertSections = [];
    sections.forEach(i => {
      if (!i.parent) {
        convertSections.push({
          selected: false,
          opened: false,
          childs: [],
          ...i
        });
      } else {
        const foundItem = convertSections.find(j => j.id === i.parent);
        foundItem.childs.push({ selected: false, ...i });
      }
    });
    commit('SET_SECTIONS', convertSections);
  },

  /**
   * Раскрыть подкатегории категории
   * @return  void
   */
  toggleSection({ commit }, id) {
    commit('TOGGLE_SECTION', id);
  },

  /**
   * Выбрать категорию
   * @return  void
   */
  selectSection({ commit }, id) {
    commit('SELECT_SECTION', id);
  }
};
