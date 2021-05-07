<template>
  <div :class="$style['dropdown-wrap']">
    <Dropdown>
      <template #button>
        <svg
          width="12"
          height="10"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M0 0h12v2H0zm0 4h12v2H0zm0 4h12v2H0z" />
        </svg>

        <span :class="$style['btn-text']">Каталог</span>
      </template>

      <template #content>
        <SectionMenu />
      </template>
    </Dropdown>
  </div>
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
@import '~/assets/scss/variables.scss';

.dropdown-wrap {
  @media (max-width: $grid-breakpoints-md) {
    button {
      color: #000;
      background-color: transparent;
      border-color: transparent;
    }
  }
}

.btn-text {
  display: none;

  @media (min-width: $grid-breakpoints-lg) {
    display: block;
    margin: 0 0 0 6px;
  }
}
</style>
