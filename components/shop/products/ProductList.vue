<template>
  <div :class="$style['list']">
    <div
      v-for="(item, index) in sortedProducts"
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
.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.item {
  flex: 1 1 20%;
  max-width: 20%;
  padding: 0 16px 24px;
}
</style>
