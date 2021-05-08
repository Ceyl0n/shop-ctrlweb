<template>
  <header :class="$style['header']">
    <Container>
      <div :class="$style['header-content']">
        <div :class="$style['brand']">Project.com</div>

        <div :class="$style['catalog']">
          <SectionDropdownMenu />
        </div>

        <WishlistBlock />

        <CartBlock />
      </div>
    </Container>
  </header>
</template>

<script>
import Container from '~/components/core/Container.vue';
import Button from '~/components/core/Button.vue';
import WishlistBlock from '~/components/shop/wishlist/WishlistBlock.vue';
import CartBlock from '~/components/shop/cart/CartBlock.vue';
import SectionDropdownMenu from '~/components/shop/sections/SectionDropdownMenu.vue';

export default {
  components: {
    Container,
    Button,
    WishlistBlock,
    CartBlock,
    SectionDropdownMenu
  }
};
</script>

<style module lang="scss">
@import '~/assets/scss/variables.scss';

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
  margin: 0 auto 0 20px;

  @media (min-width: $grid-breakpoints-lg) {
    margin-left: 34px;
  }
}
</style>
