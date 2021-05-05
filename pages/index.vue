<template>
  <Container>
    <template #container>
      <div>
        <SectionBreadcrumbs />

        <div :class="$style['content']">
          <div :class="$style['side-menu']">
            <SectionMenu />
          </div>

          <div :class="$style['products']">
            <ProductTitle />
            <ProductFiltre />
            <ProductList />
          </div>
        </div>
      </div>
    </template>
  </Container>
</template>

<script>
import Container from '~/components/core/Container.vue';
import SectionBreadcrumbs from '~/components/shop/sections/SectionBreadcrumbs.vue';
import SectionMenu from '~/components/shop/sections/SectionMenu.vue';
import ProductTitle from '~/components/shop/products/ProductTitle.vue';
import ProductFiltre from '~/components/shop/products/ProductFiltre.vue';
import ProductList from '~/components/shop/products/ProductList.vue';

export default {
  components: {
    Container,
    SectionBreadcrumbs,
    SectionMenu,
    ProductTitle,
    ProductFiltre,
    ProductList
  }
};
</script>

<style module lang="scss">
.content {
  display: flex;
  padding: 32px 0 0 0;
}

.side-menu {
  flex: 0 0 200px;
  max-width: 200px;
}

.products {
  flex: 1 1 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 32px;
}
</style>
