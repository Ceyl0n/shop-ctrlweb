<template>
  <div :class="$style['wishlist']">
    <template v-if="favoriteProductsQuantity">
      <img
        :class="$style['icon']"
        src="~/assets/svg/shop/wishlist/heart-filled-icon.svg"
      />
      <ProductQuantity :quantity="favoriteProductsQuantity" />
    </template>
    <template v-else>
      <img
        :class="$style['icon']"
        src="~/assets/svg/shop/wishlist/heart-icon.svg"
      />
    </template>
  </div>
</template>

<script>
import ProductQuantity from '~/components/core/ProductQuantity.vue';

export default {
  components: {
    ProductQuantity
  },

  computed: {
    /**
     * Кол-во товаров в избраном
     * @return  Number
     */
    favoriteProductsQuantity() {
      return this.$store.getters['shop/products/favoriteProductsQuantity'];
    }
  }
};
</script>

<style module lang="scss">
.wishlist {
  position: relative;
  display: flex;
  height: 100%;
  min-width: 46px;
  margin: 0 25px 0 0;
}

.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
