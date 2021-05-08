<template>
  <button
    @click="onClick"
    :class="[
      $style['button'],
      $style[variant],
      $style[size],
      $style[isActive ? 'active' : '']
    ]"
  >
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
      default: 'black'
    },

    size: {
      type: String,
      default: ''
    },

    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style module lang="scss">
.button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  color: #000;
  border: 1px solid transparent;
  padding: 2px 6px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
}

.black {
  background-color: #000;
  border-color: #000;
  color: #fff;
}

.lenght {
  border-color: #000;
  color: #000;
}

.green {
  background-color: #26b04d;
  border-color: #26b04d;
  color: #fff;
}

.transparent {
  background-color: transparent;
  color: #000;
}

.large {
  font-size: 14px;
  padding: 8px 10px;
}

.active {
  background-color: #000;
  border-color: #000;
  color: #fff;
}
</style>
