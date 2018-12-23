<template>
  <transition name="auth">
    <div class="auth">
      <button
        class="auth__overlay"
        @click="$emit('close')"
      ></button>

      <div class="auth__tabs">
        <button
          :class="['auth__tab', { active: selectedForm === 'reg' }]"
          @click="toggleForm('reg')"
        >Регистрация</button>
        <button
          :class="['auth__tab', { active: selectedForm === 'login' }]"
          @click="toggleForm('login')"
        >Вход</button>
      </div>

      <div class="auth__container">
        <component
          class="auth__form"
          novalidate
          :is="selectedFormComponent"
          @tabClick="toggleForm($event)"
        ></component>
      </div>
    </div>
  </transition>
</template>

<script>
import AuthReg from "./AuthReg";
import AuthLogin from "./AuthLogin";
import AuthRecovery from "./AuthRecovery";

export default {
  name: "Auth",
  components: {
    AuthReg,
    AuthLogin,
    AuthRecovery
  },
  data: () => ({
    selectedForm: "login"
  }),
  computed: {
    selectedFormComponent() {
      // example: reg => AuthReg
      return `Auth${this.selectedForm.charAt(0).toUpperCase() +
        this.selectedForm.slice(1)}`;
    }
  },
  methods: {
    toggleForm(slug) {
      if (slug) this.selectedForm = slug;
    }
  }
};
</script>

<style lang="sass" scoped>
// Auth
.auth
  position: fixed
  top: 0
  left: 0
  
  width: 100%
  height: 100%

  transition: $trs-forhims-6

.auth__container
  position: fixed
  top: 0
  right: 0

  background: #fff
  transition: $trs-forhims-6

  display: flex
  flex-direction: column
  width: 504px
  height: 100%
  padding-top: 128px

  @media (max-width: 1400px)
    padding-top: 96px

  @media (max-width: 600px)
    padding-top: 80px

.auth__overlay
  z-index: -1
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0

  width: 100%
  height: 100%

  cursor: pointer
  background: rgba(#000, 0.2)
  
  transition: $trs-forhims-6

// Hide
.auth-enter,
.auth-leave-to
  .auth
    pointer-events: none

  .auth__container,
  .auth__tabs
    transform: translateX(105%)

  .auth__overlay
    opacity: 0

// Show
.auth-enter-to,
.auth-leave

  .auth__container,
  .auth__tabs
    transform: translateX(0)

  .auth__overlay
    opacity: 1

  .auth
    pointer-events: auto

// Tabs
.auth__tabs
  width: 504px
  display: flex
  flex-direction: row
  align-items: stretch
  justify-content: space-between
  min-height: 128px
  height: 128px

  background: #fff
  transition: $trs-forhims-6

  position: absolute
  top: 0
  right: 0
  z-index: 1

  @media (max-width: 1400px)
    min-height: 96px
    height: 96px

  @media (max-width: 600px)
    min-height: 80px
    height: 80px

.auth__tab
  width: 50%
  min-height: 128px
  height: 128px

  +tt(bold)
  font-size: 16px
  color: #AAAAAA
  background: #F8F9FA
  transition: 0.2s ease
  
  @media (max-width: 1400px)
    min-height: 96px
    height: 96px

  @media (max-width: 600px)
    width: auto
    flex: 1
    min-height: 80px
    height: 80px
    font-size: 14px

  &.active,
  &:hover
    color: $b
    background: #fff

// Form
.auth__form
  position: relative
  background: #fff

  display: flex
  flex-grow: 1
  flex-direction: column
  padding-bottom: 120px
  max-height: 100%

  @media (max-width: 1400px)
    padding-bottom: 88px

  @media (max-width: 600px)
    padding-bottom: 80px

</style>


