<template>
  <div :class="$style['list']">
    <template v-for="(i, index) in sections">
      <SectionMenuItem :key="index" :item="i" />
    </template>
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
.list {
  padding: 16px;
}
</style>
