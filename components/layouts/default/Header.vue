<template>
  <header :class="$style['header']">
    <Container>
      <div :class="$style['header-content']">
        <nuxt-link to="/" :class="$style['brand']">Project.com</nuxt-link>

        <div :class="$style['catalog']">
          <Button :onClick="showSections">Каталог</Button>
        </div>

        <WishlistBtn />

        <CartBtn />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from '~/components/core/Container.vue';
import Button from '~/components/core/Button.vue';
import WishlistBtn from '~/components/shop/wishlist/WishlistBtn.vue';
import CartBtn from '~/components/shop/cart/CartBtn.vue';

export default {
  components: {
    Container,
    Button,
    WishlistBtn,
    CartBtn
  },

  methods: {
    showSections() {}
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
  color: #000;

  &:hover {
    color: inherit;
  }
}

.catalog {
  margin: 0 auto 0 34px;
}
</style>
