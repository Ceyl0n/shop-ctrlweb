<template>
  <h1 :class="$style['title']">{{ sectionName }}</h1>
</template>

<script>
export default {
  computed: {
    section() {
      return this.$store.getters['shop/sections/selectedSection'];
    },

    sectionName() {
      return this.section && this.section.name
        ? this.section.name
        : 'Список продуктов';
    }
  }
};
</script>

<style module lang="scss">
.title {
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  padding: 0 0 24px 0;
}
</style>
