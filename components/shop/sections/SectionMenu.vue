<template>
  <div :class="$style['list-wrap']">
    <div :class="$style['title']">Категории</div>

    <div :class="$style['list']">
      <template v-for="(i, index) in sections">
        <SectionMenuItem :key="index" :item="i" />
      </template>
    </div>
  </div>
</template>

<script>
import SectionMenuItem from '~/components/shop/sections/SectionMenuItem.vue';

export default {
  components: {
    SectionMenuItem
  },

  computed: {
    /**
     * Cписок категорий
     * @return  Array
     */
    sections() {
      return this.$store.state.shop.sections.sections;
    }
  }
};
</script>

<style module lang="scss">
.list-wrap {
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  padding: 8px 16px;
  border-bottom: 1px solid #e6e6e6;
}

.list {
  padding: 16px 16px 50px;
}
</style>
