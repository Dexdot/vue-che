<template>
  <div :class="['product', { active: amount > 1 }]">
    <div class="product__buttons">
      <button
        @click="amount > 1 && amount--"
        class="product__btn product__btn--minus"
      >-</button>
      <input
        type="text"
        class="product__amount"
        v-model="amount"
      />
      <button
        @click="amount++"
        class="product__btn product__btn--plus"
      >+</button>
    </div>
    <button>
      <div
        class="product__img"
        :style="{ backgroundImage: `url(${product.src})` }"
      ></div>
      <div class="product__header">
        <div class="product__name">
          <h3> {{ product.name }} </h3>
          <small class="product__weight">{{ product.weight }}г</small>
        </div>

        <b class="product__price">{{ product.price }}&#8381;</b>
      </div>
    </button>
    <div class="product__info">
      <p class="product__text"> {{ product.composition }} </p>
      <router-link
        exact
        class="product__link"
        :to="{ name: 'catalog', params: { id: product.id }}"
      >подробнее</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    amount: 1
  })
};
</script>


<style lang="sass" scoped>
.product
  width: 100%
  display: flex
  flex-direction: column
  
  &:hover
    .product__img
      transform: scale(1.05)
    .product__info::before
      transform: scaleX(1)

  &__buttons
    display: flex
    flex-direction: row
    justify-content: flex-end
    align-items: center
    width: 100%

  &__btn
    +tt(md)
    font-size: 18px
    width: 32px
    height: 32px

    @media (min-width: 2200px)
      font-size: 22px
    
  &__amount
    +tt(bold)
    color: $r
    font-size: 12px
    text-align: center

    width: 16px
    padding: 0
    border: 0

    @media (min-width: 2200px)
      font-size: 16px

  &__img
    background-repeat: no-repeat
    background-size: cover
    background-position: center center

    display: block
    width: 100%
    padding-bottom: 72%
    margin-bottom: 32px

    transform-origin: 50% 50%
    transition: 2s ease-out

  &__header
    width: 100%
    display: flex
    flex-direction: row
    align-items: flex-start
    padding-bottom: 24px

  &__name
    color: $b
    +tt(bold)
    font-size: 16px
    max-width: 84%

    @media (min-width: 2200px)
      font-size: 20px

    h3
      margin-right: 4px
      
    h3, small
      display: inline

  &__weight
    font-size: 14px
    color: #C9C9C9

    @media (min-width: 2200px)
      font-size: 18px

  &__price
    margin-left: auto
    +tt(bold)
    font-size: 16px

    @media (min-width: 2200px)
      font-size: 20px

  &__info
    padding-top: 16px
    transition: 0.2s ease-out
    border-top: 1px solid #2e2e2e

    position: relative
    &::before
      content: ''
      position: absolute
      top: -1px
      left: 0
      right: 0
      width: 100%
      height: 2px
      background: $r
      transform-origin: 0% 50%
      transition: 0.6s ease
      transform: scaleX(0)

  &__text
    display: inline
    +tt(reg)
    font-size: 16px
    line-height: 1.4
    color: rgba($b, 0.8)
    margin-right: 8px

  &__link
    display: inline
    +tt(bold)
    font-size: 15px
    line-height: 1.4
    color: rgba($b, 0.8)

    @media (min-width: 2200px)
      font-size: 19px

.product.active
  .product__info::before
    transform: scaleX(1)


</style>

