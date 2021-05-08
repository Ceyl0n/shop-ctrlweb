<template>
  <div :class="$style['pagination-wrap']">
    <div :class="$style['pagination']">
      <Button
        variant="transparent"
        size="large"
        :onClick="prevPage"
        :class="$style['prev']"
      >
        <svg
          width="9"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6.76A1 1 0 01.35 6l7-6 1.3 1.519-6.113 5.24L8.65 12l-1.302 1.518-7-6A1 1 0 010 6.76z"
            fill="#0D1306"
          />
        </svg>
        <span>Назад</span>
      </Button>

      <template v-for="(i, index) in pageCount">
        <Button
          :key="index"
          variant="transparent"
          size="large"
          :isActive="i === currentPage ? true : false"
          :onClick="() => setPage(i)"
          >{{ i }}</Button
        >
      </template>

      <Button
        variant="transparent"
        size="large"
        :onClick="nextPage"
        :class="$style['next']"
      >
        <span>Вперед</span>
        <svg
          width="9"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.65 6.76a1 1 0 01-.348.759l-7 6L0 12l6.114-5.24L0 1.518 1.302 0l7 6a1 1 0 01.349.76z"
            fill="#0D1306"
          />
        </svg>
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/core/Button.vue';

export default {
  components: { Button },

  computed: {
    /**
     * Cписок товаров
     * @return  Array
     */
    sortedProducts() {
      return this.$store.getters['shop/products/sortedProducts'];
    },

    perPage() {
      return this.$store.state.shop.products.perPage;
    },

    pageCount() {
      return Math.ceil(this.sortedProducts.total / this.perPage);
    },

    currentPage() {
      return this.$store.state.shop.products.currentPage;
    }
  },

  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.setPage(this.currentPage - 1);
      }
    },

    nextPage() {
      if (this.currentPage < this.pageCount) {
        this.setPage(this.currentPage + 1);
      }
    },

    /**
     * Установить страницу пагинации
     * @param   Number  page
     * @return  void
     */
    setPage(page) {
      if (page < 1) page = 1;
      if (page > this.pageCount) page = this.pageCount;

      this.$router
        .replace({
          query: { ...this.$route.query, page: page }
        })
        .catch(() => {});

      this.$store.dispatch('shop/products/setPage', page);
    }
  }
};
</script>

<style module lang="scss">
.pagination-wrap {
  display: flex;
  justify-content: center;
  padding: 0 0 24px 0;
}

.prev {
  margin: 0 24px 0 0;

  span {
    margin: 0 0 0 6px;
  }
}
.next {
  margin: 0 0 0 24px;

  span {
    margin: 0 6px 0 0;
  }
}
</style>
