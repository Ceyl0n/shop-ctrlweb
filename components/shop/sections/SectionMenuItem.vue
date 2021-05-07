<template>
  <div :class="$style[hasOpened() ? 'opened' : '']">
    <div :class="$style['name-wrap']">
      <span
        @click="selectSection()"
        :class="[$style['name'], $style[hasSelected() ? 'selected' : '']]"
        >{{ item.name }}</span
      >

      <span
        v-if="hasChilds()"
        @click="toggleSection()"
        :class="$style['icon-toggle-category']"
      >
        <img src="~/assets/svg/shop/sections/toggle-arrow.svg" />
      </span>
    </div>

    <div v-if="hasChilds()" :class="$style['list']">
      <template v-for="(i, index) in item.childs">
        <section-menu-item :key="index" :item="i" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionMenuItem',

  props: {
    item: {
      type: Object,
      required: true,
      default: {}
    }
  },

  methods: {
    /**
     * Наличие вложенных категорий
     * @return  Boolean
     */
    hasChilds() {
      return this.item.childs && this.item.childs.length;
    },

    /**
     * Выбран или нет
     * @return  Boolean
     */
    hasSelected() {
      return this.item.selected;
    },

    /**
     * Открыты / закрыты дочерние категории
     * @return  Boolean
     */
    hasOpened() {
      return this.item.opened;
    },

    /**
     * Свернуть / Развернуть вложенные категории
     * @return  void
     */
    toggleSection() {
      this.$store.dispatch('shop/sections/toggleSection', this.item.id);
    },

    /**
     * Выбрать категорию
     * @return  void
     */
    selectSection() {
      this.$root.$emit('hide-section-modal');

      this.$router
        .replace({
          query: { ...this.$route.query, section: this.item.id }
        })
        .catch(() => {});

      this.$store.dispatch('shop/sections/selectSection', this.item.id);
      this.$store.dispatch('shop/products/sortBySectionId', this.item.id);
    }
  }
};
</script>

<style module lang="scss">
.opened {
  .icon-toggle-category {
    transform: rotate(180deg);
  }

  .list {
    display: block;
  }
}

.name-wrap {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 16px;
  margin: 0 0 8px 0;
}

.name {
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.selected {
    font-weight: 700;
  }
}

.icon-toggle-category {
  transform: rotate(0);
  transition: transform 0.2s ease;
  user-select: none;
  cursor: pointer;
}

.list {
  display: none;
  padding: 0 0 0 16px;
}
</style>
