<template>
  <div :class="$style['quantity']">{{ quantity }}</div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style module lang="scss">
.quantity {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  background-color: #fff;
  color: #000;
  border-radius: 100%;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
}
</style>
