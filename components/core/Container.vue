<template>
  <div :class="$style['container']">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style module lang="scss">
@import '~/assets/scss/variables.scss';

.container {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: $grid-breakpoints-lg) {
    max-width: 1440px;
    padding-left: 32px;
    padding-right: 32px;
  }
}
</style>
