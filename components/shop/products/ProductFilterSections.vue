<template>
  <div :class="$style['filter-section']">
    <Button variant="lenght" :onClick="showSection">
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000"
          d="M6 3h8v2H6zm0 4h8v2H6zm0 4h8v2H6zM2 3h2v2H2zm0 4h2v2H2zm0 4h2v2H2z"
        />
      </svg>

      <span :class="$style['btn-text']">Категории</span>
    </Button>

    <div v-if="show" :class="$style['modal']">
      <div :class="$style['modal-content']">
        <div :class="$style['title']">
          <span>Категории</span>
          <span :class="$style['title-icon-close']" @click="hideSection()">
            <svg
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000"
                d="M17.657 4.93l1.414 1.413L6.343 19.071 4.93 17.657z"
              />
              <path
                fill="#000"
                d="M19.071 17.657l-1.414 1.414L4.929 6.343 6.343 4.93z"
              />
            </svg>
          </span>
        </div>

        <SectionMenu />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '~/components/core/Button.vue';
import SectionMenu from '~/components/shop/sections/SectionMenu.vue';

export default {
  components: {
    Button,
    SectionMenu
  },

  data() {
    return {
      show: false
    };
  },

  created() {
    this.$root.$on('hide-section-modal', () => this.hideSection());
  },

  methods: {
    showSection() {
      this.show = true;
    },

    hideSection() {
      this.show = false;
    }
  }
};
</script>

<style module lang="scss">
.filter-section {
  display: flex;
  height: 100%;
  margin: 0 16px 0 0;
}

.btn-text {
  margin: 0 0 0 6px;
}

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  color: #000;
  z-index: 5;
}

.modal-content {
  padding: 0 0 34px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  padding: 24px 16px 8px;
}

.title-icon-close {
  cursor: pointer;
}
</style>
