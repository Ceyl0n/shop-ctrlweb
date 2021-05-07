<template>
  <div :class="$style['dropdown']">
    <Button size="large" :onClick="showSections">
      <slot name="button"> </slot>
    </Button>

    <div :class="[$style['dropdown-menu'], $style[show ? 'show' : '']]">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import Button from '~/components/core/Button.vue';

export default {
  components: {
    Button
  },

  data() {
    return {
      show: false
    };
  },

  methods: {
    showSections() {
      this.show = !this.show;
    }
  }
};
</script>

<style module lang="scss">
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  min-width: 200px;
  margin: 2px 0 0;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  &.show {
    display: block;
    transform: translate3d(0px, 38px, 0px);
    top: 0px;
    right: auto;
    bottom: auto;
    outline: 0;
    will-change: transform;
  }
}
</style>
