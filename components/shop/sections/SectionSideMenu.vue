<template>
  <div :class="$style['list-wrap']">
    <div :class="$style['title']">Категории</div>

    <SectionMenu />
  </div>
</template>

<script>
import SectionMenu from '~/components/shop/sections/SectionMenu.vue';

export default {
  components: {
    SectionMenu
  }
};
</script>

<style module lang="scss">
.list-wrap {
  padding: 0 0 34px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  padding: 8px 16px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
