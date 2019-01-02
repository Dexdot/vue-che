<template>
  <div class="cart-table__row">
    <div class="cart-table__flex">
      <p class="cart-table__text">{{ product.name }}</p>
      <span class="cart-table__weight">{{ product.weight }} г</span>
    </div>
    <div class="cart-table__flex">
      <div class="cart-table__amount">
        <button
          class="cart-table__btn cart-table__btn--up"
          type="button"
          @click="onPlus"
        >
          <img
            src="./arrow.svg"
            alt="Увеличить количество на 1"
          >
        </button>
        <span class="cart-table__amount-num">{{ product.amount }}</span>
        <button
          class="cart-table__btn cart-table__btn--down"
          type="button"
          @click="onMinus"
        >
          <img
            src="./arrow.svg"
            alt="Уменьшить количество на 1"
          >
        </button>
      </div>
      <p class="cart-table__text">{{ product.price }}&#8381;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    onPlus() {
      this.$store.dispatch("changeProductAmount", {
        id: this.product.id,
        amount: this.product.amount + 1
      });
    },
    onMinus() {
      const { id, amount } = this.product;

      if (amount > 1) {
        this.$store.dispatch("changeProductAmount", {
          amount: amount - 1,
          id
        });
      } else {
        this.$store.dispatch("removeFromCart", id);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.cart-table
  &__row
    +tt(md)
    color: $b

    min-height: 56px
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between

    border-bottom: 1px solid #F5F5F5

  &__flex
    &:not(:first-child)
      display: flex
      flex-direction: row
      align-items: center
    
    &:first-child
      max-width: 70%

      .cart-table__text
        display: inline
        
    &:last-child > .cart-table__text
      white-space: nowrap

  &__text
    font-size: 14px

    @media (min-width: 2200px)
      font-size: 18px

  &__weight
    white-space: nowrap
    font-size: 14px
    color: #C9C9C9

    display: inline
    margin-left: 8px

    @media (min-width: 2200px)
      font-size: 18px

  &__amount
    width: 32px
    display: flex
    flex-direction: column
    align-items: stretch
    justify-content: flex-start
    transition: 0.2s ease-out

    &:hover
      background: #F0F0F2

      .cart-table__amount-num::before
        opacity: 0
        pointer-events: none
        
      .cart-table__btn
        opacity: 1
        pointer-events: auto

    &-num
      font-size: 14px
      text-align: center
      position: relative

      @media (min-width: 2200px)
        font-size: 18px

      &::before
        content: ''
        width: 6px
        height: 6px

        background: url('./x.svg') no-repeat center
        background-size: cover
        transition: 0.2s ease-out
        opacity: 1
        pointer-events: auto

        position: absolute
        top: 50%
        left: 0
        transform: translate(0, -50%)        

  &__btn
    position: relative
    width: 32px
    height: 20px

    transition: 0.2s ease-out
    opacity: 0
    pointer-events: none

    img
      width: 9px
      height: auto
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

    &--up img
      transform: rotate(180deg) translate(3px, 1px)
    &--down img
      transform: rotate(0deg) translate(-3px, -1px)

</style>

