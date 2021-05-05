<template>
  <div v-if="sections.length" :class="$style['breadcrumbs']">
    <template v-for="(i, index) in sections">
      <span :key="index">{{ i.name }}</span>
      <span
        v-if="index < sections.length - 1"
        :key="index"
        :class="$style['divider']"
      ></span>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    sections() {
      return this.$store.getters['shop/sections/sectionBreadcrumbs'];
    }
  }
};
</script>

<style module lang="scss">
.breadcrumbs {
  display: flex;
  font-size: 12px;
  line-height: 16px;
  padding: 24px 0 0 0;
}

.divider {
  width: 36px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(~assets/svg/shop/sections/breadcrumbs-divider.svg);
}
</style>
