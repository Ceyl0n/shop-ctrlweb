<template>
  <div :class="$style['container']">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style module lang="scss">
.container {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 32px;
  padding-right: 32px;
}
</style>
