<template>
  <form @submit.prevent="onSubmit">
    <div class="auth-form-container">
      <el-input
        type="email"
        placeholder="Почта"
        v-model="email"
      ></el-input>
      <el-input
        type="password"
        placeholder="Пароль"
        v-model="password"
      ></el-input>
      <button
        class="auth-form-text right"
        @click="$emit('tabClick', 'recovery')"
        type="button"
      >Забыли пароль?</button>
      <button
        class="auth-submit-btn"
        type="submit"
      >Войти</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthLogin",
  data: () => ({
    email: "",
    password: ""
  }),
  computed: {
    validEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(this.email).toLowerCase());
    },
    validForm() {
      return this.validEmail && this.password;
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        console.log("submit");
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.auth-form-container
  +scrollbar
  max-height: 100%
  padding: 56px
  padding-top: 24%
  width: 100%

  display: flex
  flex-grow: 1
  flex-direction: column
  
  @media (max-width: 600px)
    padding: 32px $container-padding-mob

  .el-input
    margin-bottom: 24px

.auth-form-text
  +tt(reg)
  font-size: 14px
  color: rgba($b, 0.6)
.right
  margin-left: auto

.auth-submit-btn
  position: absolute
  bottom: 0
  left: 0
  right: 0

  width: 100%
  min-height: 120px
  height: 120px
  display: flex
  align-items: center
  justify-content: center

  color: #fff
  +tt(bold)
  font-size: 16px

  background: $r
  transition: 0.2s ease-out

  &:hover
    opacity: 0.8

  @media (max-width: 1400px)
    min-height: 88px
    height: 88px

  @media (max-width: 600px)
    height: 80px
    min-height: 80px

</style>

