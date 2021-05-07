<template>
  <div :class="$style['filter-wrap']">
    <div :class="$style['sections']">
      <ProductFilterSections />
    </div>
    <div>
      <ProductFilterSelect />
    </div>
  </div>
</template>

<script>
import ProductFilterSelect from '~/components/shop/products/ProductFilterSelect.vue';
import ProductFilterSections from '~/components/shop/products/ProductFilterSections.vue';

export default {
  components: {
    ProductFilterSelect,
    ProductFilterSections
  }
};
</script>

<style module lang="scss">
@import '~/assets/scss/variables.scss';

.filter-wrap {
  display: flex;
  padding: 0 0 24px 0;
}

.sections {
  display: block;

  @media (min-width: $grid-breakpoints-lg) {
    display: none;
  }
}
</style>
