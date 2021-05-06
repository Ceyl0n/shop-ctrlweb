<template>
  <button @click="onClick" :class="[$style['button'], $style[variant]]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    },

    variant: {
      type: String,
      default: ''
    }
  }
};
</script>

<style module lang="scss">
.button {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 2px 6px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
}

.green {
  background-color: #26b04d;
}

.transparent {
  background-color: transparent;
  color: #000;
}
</style>
