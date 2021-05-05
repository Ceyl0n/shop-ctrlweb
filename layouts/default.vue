<template>
  <div :class="$style['app']">
    <Header />

    <main :class="$style['app-content']">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/layouts/default/Header.vue';

export default {
  name: 'default',

  components: {
    Header
  }
};
</script>

<style module lang="scss">
.app {
}

.app-content {
}
</style>
