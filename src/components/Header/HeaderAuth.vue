<template>
  <div class="header-auth">
    <button
      class="header-auth__btn"
      @click="onClick"
    >
      <img
        class="header-auth__icon"
        src="./personal.svg"
        alt="Авторизация"
      >
      <span>Войти</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderAuth",
  props: {
    onClick: Function
  }
};
</script>


<style lang="sass" scoped>
.header-auth
  display: flex
  align-items: center
  padding: 0 32px

  border-left: 1px solid rgba(#E8EAED, 0.68)
  
  &__btn
    display: flex
    align-items: center

    color: $b
    font-size: 15px
    +tt(reg)

  &__icon
    width: 13px
    height: 13px
    margin-right: 8px
</style>

