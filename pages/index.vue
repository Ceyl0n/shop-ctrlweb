<template>
  <Container>
    <div :class="$style['content']">
      <SectionBreadcrumbs />

      <div :class="$style['main']">
        <div :class="$style['side-menu']">
          <SectionSideMenu />
        </div>

        <div :class="$style['products']">
          <ProductTitle />
          <ProductFilter />
          <ProductList />
        </div>
      </div>

      <ProductPagination />
    </div>
  </Container>
</template>

<script>
import Container from '~/components/core/Container.vue';
import SectionBreadcrumbs from '~/components/shop/sections/SectionBreadcrumbs.vue';
import SectionSideMenu from '~/components/shop/sections/SectionSideMenu.vue';
import ProductTitle from '~/components/shop/products/ProductTitle.vue';
import ProductFilter from '~/components/shop/products/ProductFilter.vue';
import ProductList from '~/components/shop/products/ProductList.vue';
import ProductPagination from '~/components/shop/products/ProductPagination.vue';

export default {
  components: {
    Container,
    SectionBreadcrumbs,
    SectionSideMenu,
    ProductTitle,
    ProductFilter,
    ProductList,
    ProductPagination
  }
};
</script>

<style module lang="scss">
@import '~/assets/scss/variables.scss';

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main {
  display: flex;
  padding: 32px 0 0 0;
}

.side-menu {
  flex: 0 0 200px;
  max-width: 200px;
  display: none;

  @media (min-width: $grid-breakpoints-lg) {
    display: block;
  }
}

.products {
  flex: 1 1 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: $grid-breakpoints-lg) {
    padding: 0 0 0 32px;
  }
}
</style>
