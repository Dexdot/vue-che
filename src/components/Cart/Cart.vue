<template>
  <div class="cart">
    <CartEmpty />
  </div>
</template>

<script>
import CartEmpty from "./CartEmpty";

export default {
  name: "Cart",
  components: {
    CartEmpty
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

</style>

