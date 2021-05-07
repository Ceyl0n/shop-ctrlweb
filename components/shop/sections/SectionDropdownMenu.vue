<template>
  <Dropdown>
    <template #button>
      <img src="~/assets/svg/layout/header/menu.svg" />
      <span :class="$style['btn-text']">Каталог</span>
    </template>

    <template #content>
      <SectionMenu />
    </template>
  </Dropdown>
</template>

<script>
import Dropdown from '~/components/core/Dropdown.vue';
import SectionMenu from '~/components/shop/sections/SectionMenu.vue';

export default {
  components: {
    Dropdown,
    SectionMenu
  }
};
</script>

<style module lang="scss">
.btn-text {
  margin: 0 0 0 6px;
}
</style>
