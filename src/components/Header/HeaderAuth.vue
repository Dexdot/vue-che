<template>
  <div class="header-auth">
    <button
      class="header-auth__btn"
      @click="onButtonClick"
    >
      <img
        class="header-auth__icon"
        src="./personal.svg"
        alt="Авторизация"
      >
      <span v-if="isUserLoggedIn">{{ user.name }}</span>
      <span v-else>Войти</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderAuth",
  props: {
    onClick: Function
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    onButtonClick() {
      if (this.isUserLoggedIn) {
        this.$router.push("/personal");
      } else {
        this.onClick();
      }
    }
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

