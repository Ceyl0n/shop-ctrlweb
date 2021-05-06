<template>
  <div :class="$style['filter']">
    <select v-model="selectedFilter">
      <option
        v-for="(i, index) in filterOptions"
        :key="index"
        :value="i.value"
        >{{ i.text }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Выбранный фильтр
     * @return  String
     */
    selectedFilter: {
      get() {
        return this.$store.state.shop.products.selectedFilter;
      },

      set(value) {
        this.$router
          .replace({
            query: { ...this.$route.query, sort: value }
          })
          .catch(() => {});

        this.$store.dispatch('shop/products/setFilter', value);
      }
    },

    /**
     * Cписок фильтров
     * @return  Array
     */
    filterOptions() {
      return this.$store.state.shop.products.filterOptions;
    }
  }
};
</script>

<style module lang="scss">
.filter {
  padding: 0 0 24px 0;
}
</style>
