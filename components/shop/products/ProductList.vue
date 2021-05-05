<template>
  <div :class="$style['list']">
    <div v-for="(item, index) in products" :key="index" :class="$style['item']">
      <div :class="$style['content']">
        <div :class="$style['image-wrap']">
          <div :class="$style['image']" :style="imageStyle(item.photo)"></div>
        </div>

        <div :class="$style['title-wrap']">
          <div :class="$style['title']">{{ item.name }}</div>
        </div>

        <div :class="$style['weight']">{{ weightConvert(item.weight) }}</div>

        <div :class="$style['price']">{{ item.price | currency }} ₽</div>

        <div :class="$style['quantity']">
          <span :class="$style['quantity-text']">{{
            quantityConvert(item.quantity)
          }}</span>
          <i :class="[$style['quantity-dot'], $style['on']]"></i>
          <i
            :class="[
              $style['quantity-dot'],
              $style[item.quantity > 50 ? 'on' : 'off']
            ]"
          ></i>
          <i
            :class="[
              $style['quantity-dot'],
              $style[item.quantity > 100 ? 'on' : 'off']
            ]"
          ></i>
        </div>

        <div :class="$style['actions']">
          <button>В корзину</button>
          <template v-if="item.favorite">
            <button @click="removeFromWishlist(item.id)">
              <img src="~/assets/svg/shop/wishlist/heart-filled-icon.svg" />
            </button>
          </template>
          <template v-else>
            <button @click="addToWishlist(item.id)">
              <img src="~/assets/svg/shop/wishlist/heart-icon.svg" />
            </button>
          </template>
        </div>

        <hr />
        <div>id: {{ item.id }}</div>
        <div>section: {{ item.section }}</div>
        <div>parent_section: {{ item.parent_section }}</div>
        <div>favorite: {{ item.favorite }}</div>
        <div>discount: {{ item.discount }}</div>
        <div>on_sale: {{ item.on_sale }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    /**
     * Cписок товаров
     * @return  Array
     */
    products() {
      return this.$store.state.shop.products.products;
    }
  },
  methods: {
    /**
     * Стили изображения товара
     * @param   String  photo
     * @return  Object
     */
    imageStyle(photo) {
      return photo ? { backgroundImage: `url(${photo})` } : {};
    },

    /**
     * Преобразование веса для удобности пользователя
     * граммы в килограммы
     * @param   Number  weight
     * @return  String
     */
    weightConvert(weight) {
      return weight < 1000 ? `${weight} г` : `${weight / 1000} кг`;
    },

    /**
     * Преобразование кол-ва для удобности пользователя
     * @param   Number  quantity
     * @return  String
     */
    quantityConvert(quantity) {
      return quantity < 50
        ? 'мало'
        : quantity > 50 && quantity < 100
        ? 'средне'
        : 'много';
    },

    /**
     * Добавляем товар в корзину
     * @return  void
     */
    addToCart() {},

    /**
     * Добавляем товар в избранное
     * @param   Number  id
     * @return  void
     */
    addToWishlist(id) {
      this.$store.dispatch('shop/products/addToWishlist', id);
    },

    /**
     * Удаляем товар из избранного
     * @param   Number  id
     * @return  void
     */
    removeFromWishlist(id) {
      this.$store.dispatch('shop/products/removeFromWishlist', id);
    }
  }
};
</script>

<style module lang="scss">
.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -16px;
}

.item {
  flex: 1 1 20%;
  max-width: 20%;
  padding: 0 16px 24px;
}

.content {
  padding: 16px 16px 22px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
}

.image-wrap {
  position: relative;
  display: flex;
  background-color: #c4c4c4;

  &:after {
    content: '';
    padding-top: 100%;
  }
}

.image {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.title-wrap {
  position: relative;
  font-size: 12px;
  line-height: 16px;
  height: 48px;
  margin: 8px 0 0 0;
  overflow: hidden;
}

.title {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}

.weight,
.quantity {
  display: flex;
  align-items: center;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  color: #515751;
  margin: 8px 0 0 0;
}

.price {
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: #001605;
  margin: 8px 0 0 0;
}

.quantity-text {
  text-transform: capitalize;
  margin: 0 4px 0 0;
}

.quantity-dot {
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #000000;
  margin: 0 2px 0 0;

  &.on {
    display: block;
  }

  &.off {
    display: none;
  }
}

.actions {
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0 0;
}
</style>
