<template>
  <div :class="$style['content']">
    <div :class="$style['image-wrap']">
      <div :class="$style['image']" :style="imageStyle()"></div>
    </div>

    <div :class="$style['title-wrap']">
      <div :class="$style['title']">{{ item.name }}</div>
    </div>

    <div :class="$style['weight']">{{ weightConvert() }}</div>

    <div :class="$style['price']">{{ item.price | currency }} <Currency /></div>

    <div :class="$style['quantity']">
      <span :class="$style['quantity-text']">{{ quantityConvert() }}</span>
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
      <template v-if="productInCart">
        <Button variant="green" :onClick="removeFromCart">
          <img src="~/assets/svg/shop/products/product-in-cart.svg" />
          <span :class="$style['btn-text']">В корзину</span>
        </Button>
      </template>
      <template v-else>
        <Button :onClick="addToCart">
          <span>В корзину</span>
        </Button>
      </template>

      <template v-if="item.favorite">
        <Button variant="transparent" :onClick="removeFromWishlist">
          <img src="~/assets/svg/shop/wishlist/heart-filled-icon.svg" />
        </Button>
      </template>
      <template v-else>
        <Button variant="transparent" :onClick="addToWishlist">
          <img src="~/assets/svg/shop/wishlist/heart-icon.svg" />
        </Button>
      </template>
    </div>

    <div :class="$style['badge-wrap']">
      <span v-if="item.discount" :class="$style['badge']"
        >-{{ item.discount }}%</span
      >
      <span v-if="item.on_sale" :class="$style['badge']">Sale</span>
    </div>
  </div>
</template>

<script>
import Button from '~/components/core/Button.vue';
import Currency from '~/components/core/Currency.vue';

export default {
  components: {
    Button,
    Currency
  },

  props: {
    item: {
      type: Object,
      required: true,
      default: {}
    }
  },

  computed: {
    /**
     * Наличие товара в корзине
     * @return  Boolean
     */
    productInCart() {
      return this.$store.getters['shop/cart/productInCart'](this.item.id);
    }
  },

  methods: {
    /**
     * Стили изображения товара
     * @return  Object
     */
    imageStyle() {
      return this.item.photo
        ? { backgroundImage: `url(${this.item.photo})` }
        : {};
    },

    /**
     * Преобразование веса для удобности пользователя
     * граммы в килограммы
     * @return  String
     */
    weightConvert() {
      return this.item.weight < 1000
        ? `${this.item.weight} г`
        : `${this.item.weight / 1000} кг`;
    },

    /**
     * Преобразование кол-ва для удобности пользователя
     * @return  String
     */
    quantityConvert() {
      return this.item.quantity < 50
        ? 'мало'
        : this.item.quantity > 50 && this.item.quantity < 100
        ? 'средне'
        : 'много';
    },

    /**
     * Добавляем товар в корзину
     * @return  void
     */
    addToCart() {
      this.$store.dispatch('shop/cart/addToCart', this.item.id);
    },

    /**
     * Удаляем товар из корзины
     * @return  void
     */
    removeFromCart() {
      this.$store.dispatch('shop/cart/removeFromCart', this.item.id);
    },

    /**
     * Добавляем товар в избранное
     * @return  void
     */
    addToWishlist() {
      this.$store.dispatch('shop/products/addToWishlist', this.item.id);
    },

    /**
     * Удаляем товар из избранного
     * @return  void
     */
    removeFromWishlist() {
      this.$store.dispatch('shop/products/removeFromWishlist', this.item.id);
    }
  }
};
</script>

<style module lang="scss">
@import '~/assets/scss/variables.scss';

* {
  &:nth-child(1),
  &:nth-child(2) {
    & > .content {
      border-width: 1px 1px 1px 0px;

      @media (min-width: $grid-breakpoints-lg) {
        border-width: 1px;
      }
    }
  }
}

.content {
  position: relative;
  padding: 16px 16px 22px;
  border: 1px solid #e7e7e7;
  border-width: 0px 1px 1px 0px;
  overflow: hidden;

  @media (min-width: $grid-breakpoints-lg) {
    border-width: 1px;
    border-radius: 4px;
  }
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

.btn-text {
  margin: 0 0 0 6px;
}

.badge-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
}

.badge {
  min-width: 65px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  padding: 8px;
  margin: 0 0 0 5px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 0px 0px 0px 20px;
}
</style>
