<template>
  <div :class="$style['list']">
    <div
      v-for="(item, index) in sortedProducts.items"
      :key="index"
      :class="$style['item']"
    >
      <ProductListItem :item="item" />
    </div>
  </div>
</template>

<script>
import ProductListItem from '~/components/shop/products/ProductListItem.vue';

export default {
  components: {
    ProductListItem
  },

  computed: {
    /**
     * Cписок товаров
     * @return  Array
     */
    sortedProducts() {
      return this.$store.getters['shop/products/sortedProducts'];
    }
  }
};
</script>

<style module lang="scss">
@import '~/assets/scss/variables.scss';

.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0 0 40px;
  margin: 0 -16px;
}

.item {
  flex: 1 1 50%;
  max-width: 50%;

  @media (min-width: $grid-breakpoints-lg) {
    flex: 1 1 20%;
    max-width: 20%;
    padding: 0 16px 24px;
  }
}
</style>
