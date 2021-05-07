<template>
  <div :class="$style['cart']">
    <template v-if="cartProductsQuantity">
      <img
        :class="$style['icon']"
        src="~/assets/svg/shop/cart/cart-filled-icon.svg"
      />
      <ProductQuantity :quantity="cartProductsQuantity" />
    </template>
    <template v-else>
      <img :class="$style['icon']" src="~/assets/svg/shop/cart/cart-icon.svg" />
    </template>

    <div :class="$style['amount']">{{ amountCart }} <Currency /></div>
  </div>
</template>

<script>
import ProductQuantity from '~/components/core/ProductQuantity.vue';
import Currency from '~/components/core/Currency.vue';

export default {
  components: {
    ProductQuantity,
    Currency
  },

  computed: {
    /**
     * Кол-во товаров в избраном
     * @return  Number
     */
    cartProductsQuantity() {
      return this.$store.getters['shop/cart/cartProductsQuantity'];
    },
    /**
     * Кол-во товаров в избраном
     * @return  Number
     */
    amountCart() {
      return this.$store.getters['shop/cart/amountCart'];
    }
  }
};
</script>

<style module lang="scss">
.cart {
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  min-width: 46px;
  padding: 0 8px;
}

.icon {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.amount {
  font-size: 12px;
  line-height: 16px;
  color: #000;
}
</style>
