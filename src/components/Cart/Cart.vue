<template>
  <div class="cart">
    <CartEmpty
      v-if="amount < 1"
      class="cart__content cart__content--empty"
    />

    <form
      v-else
      class="cart__content cart__content--primary"
    >
      <div class="cart__content-header">
        <h2 class="cart__title">Мой заказ</h2>
        <button
          class="cart__bucket"
          type="button"
          @click="clearCart"
        >
          <img
            src="./bucket.svg"
            alt="Удалить заказ"
            class="cart__bucket-img"
          />
        </button>
        <button
          class="cart__close"
          type="button"
        >
          <img
            src="./close.svg"
            alt="Закрыть"
          >
        </button>
      </div>

      <!-- cart-table -->
      <div class="cart__table cart-table">
        <CartItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <!-- ./cart-table -->

      <!-- cart-result -->
      <div class="cart-result">
        <div class="cart-result__block">
          <div class="cart-result__text">{{ amount }}</div>
          <span class="cart-result__label">Блюда</span>
        </div>
        <div class="cart-result__block">
          <div class="cart-result__text">{{ total }}&#8381;</div>
          <span class="cart-result__label">Итого</span>
        </div>
      </div>
      <!-- ./cart-result -->

      <button
        class="cart-btn"
        type="submit"
      >Оформить заказ</button>
    </form>
  </div>
</template>

<script>
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

export default {
  name: "Cart",
  components: {
    CartEmpty,
    CartItem
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
    total() {
      return this.$store.getters.total;
    },
    amount() {
      return this.$store.getters.cartItems.length;
    }
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
    }
  }
};
</script>

<style lang="sass" scoped>
.cart
  position: fixed
  z-index: 2
  top: 0
  right: 0
  bottom: 0
  height: 100%
  width: 326px
  background: #fff
  border-top: 1px solid #E8EAED
  border-left: 1px solid #E8EAED

  @media (min-width: 2200px)
    width: 400px

  @media (max-width: 1100px)
    transform: translateX(105%)
    transition: $trs-forhims-6
    &.active
      transform: translateX(0%)

  @media (max-width: 500px)
    z-index: 3
    width: 100%
  
  &__content
    margin-top: 73px
    padding-top: 32px

    @media (max-width: 800px)
      margin-top: 89px
    @media (max-width: 500px)
      margin-top: 0

    &--empty
      color: #fff
      text-align: center
      padding-top: 0

    &--primary
      overflow-y: auto
      height: 100%
      padding-bottom: 73px
      display: flex
      flex-direction: column
      justify-content: flex-start

      @media (max-width: 1100px)
        padding-top: 0
      @media (max-width: 800px)
        padding-bottom: 89px
      @media (max-width: 500px)
        padding-bottom: 0

  &__content-header
    padding-left: 32px
    padding-right: 40px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    margin-bottom: 24px

    @media (max-width: 1100px)
      justify-content: flex-start
      padding-right: 0
      border-bottom: 1px solid #e8eaed
    @media (max-width: 500px)
      padding-left: $container-padding-mob

.cart
  &__table
    +scrollbar
    max-height: 50%

    padding-left: 32px
    padding-right: 40px
    @media (max-width: 500px)
      padding-left: $container-padding-mob
      padding-right: $container-padding-mob

  &__title
    +tt(bold)
    font-size: 24px
    letter-spacing: 0.01em

    @media (max-width: 500px)
      font-size: 21px
      line-height: 30px

  &__bucket
    @media (max-width: 1100px)
      margin-left: 10px

  &__bucket-img
    width: 24px
    height: 24px

  &__close
    width: 80px
    height: 80px
    background: $r
    display: none
    align-items: center
    justify-content: center
    margin-left: auto

    @media (max-width: 1100px)
      display: flex

    img
      width: 20px
      height: 20px

.cart
  &-btn
    background: $r
    width: 100%
    height: 56px
    color: #fff
    +tt(md)
    font-size: 12px
    letter-spacing: 0.06em
    text-transform: uppercase
.cart-result
  +tt(md)
  color: $b

  display: flex
  flex-direction: row
  align-items: stretch
  margin-top: auto
  border-top: 1px solid #F5F5F5

  &__block
    padding: 20px 40px 20px 32px
    width: 50%
    &:nth-child(1)
      border-right: 1px solid #F5F5F5

    @media (max-width: 500px)
      padding-left: 40px

  &__label
    font-size: 14px
    color: #c9c9c9

    @media (min-width: 2200px)
      font-size: 16px

  &__text
    font-size: 22px
    margin-bottom: 8px

    @media (min-width: 2200px)
      font-size: 24px
.cart-table
  display: flex
  flex-direction: column
  align-items: stretch
  justify-content: flex-start
</style>

