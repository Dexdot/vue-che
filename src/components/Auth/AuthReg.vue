<template>
  <form @submit.prevent="onSubmit">
    <div class="auth-form-container">
      <el-input
        placeholder="Имя"
        v-model="name"
      ></el-input>
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
      <p class="auth-form-text left">
        Нажимая кнопку "Регистрация", вы принимаете условия Пользовательского соглашения
      </p>
      <button
        class="auth-submit-btn"
        type="submit"
        :disabled="!validForm || loading"
      >
        <ElementLoading
          :active="loading"
          color="#D62323"
        />
        Зарегистрироваться</button>
    </div>
  </form>
</template>

<script>
import { Notification } from "element-ui";

export default {
  name: "AuthReg",
  data: () => ({
    name: "",
    email: "",
    password: ""
  }),
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    validEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(this.email).toLowerCase());
    },
    validPassword() {
      return this.password.length >= 8;
    },
    validForm() {
      return this.validEmail && this.validPassword && this.name;
    }
  },
  methods: {
    onSubmit() {
      if (this.validForm) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
        };

        this.$store
          .dispatch("registerUser", user)
          .then(() => {
            this.$emit("success");

            Notification.success({
              title: "Регистрация прошла успешна",
              message: ""
            });
          })
          .catch(err => {
            Notification.error({
              title: "Ошибка",
              message: this.$store.getters.error,
              onClick: () => {
                this.$store.dispatch("clearError");
                console.log("snack click");
              }
            });
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

.auth-form-text
  +tt(reg)
  font-size: 14px
  color: rgba($b, 0.6)
  
.left
  margin-right: auto

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



