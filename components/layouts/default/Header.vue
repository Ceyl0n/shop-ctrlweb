<template>
  <header :class="$style['header']">
    <Container>
      <template #container>
        <div :class="$style['header-content']">
          <nuxt-link to="/" :class="$style['brand']">Project.com</nuxt-link>

          <button :class="$style['catalog']">Каталог</button>

          <nuxt-link to="/wishlist" :class="$style['wishlist']">
            <img src="~/assets/svg/shop/wishlist/heart-icon.svg" />
          </nuxt-link>

          <nuxt-link to="/cart" :class="$style['cart']">
            <img src="~/assets/svg/shop/cart/cart-icon.svg" />
          </nuxt-link>
        </div>
      </template>
    </Container>
  </header>
</template>

<script>
import Container from '~/components/core/Container.vue';

export default {
  components: {
    Container
  }
};
</script>

<style module lang="scss">
.header {
  display: flex;
  height: 56px;
  border-bottom: 1px solid #e5e5e5;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.brand {
  font-weight: 700;
  font-size: 28px;
}

.catalog {
  margin: 0 auto 0 34px;
}

.wishlist {
  margin: 0 33px 0 0;
}

.cart {
}
</style>
