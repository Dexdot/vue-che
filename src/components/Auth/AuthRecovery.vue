<template>
  <form @submit.prevent="onSubmit">
    <div class="auth-form-container">
      <h2 class="auth-form-title">Восстановление пароля</h2>
      <el-input
        type="email"
        placeholder="Почта"
        v-model="email"
      ></el-input>
      <button
        class="auth-submit-btn"
        type="submit"
        :disabled="!validForm"
      >Отправить</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthRecovery",
  data: () => ({
    email: ""
  }),
  computed: {
    validEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(this.email).toLowerCase());
    },
    validForm() {
      return this.validEmail;
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        console.log({
          email: this.email
        });
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

.auth-form-title
  +tt(bold)
  font-size: 24px
  letter-spacing: 0.01em
  color: $b
  margin-bottom: 1.6em

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

  &:hover,
  &[disabled]
    opacity: 0.8

  @media (max-width: 1400px)
    min-height: 88px
    height: 88px

  @media (max-width: 600px)
    height: 80px
    min-height: 80px

</style>
