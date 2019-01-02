<template>
  <div>
    <nav class="header">
      <ul class="header__list">
        <li
          v-for="link in links"
          :key="link.text"
          :class="{'header__logo': link.logo}"
        >
          <router-link
            class="header__link link"
            :to="link.path"
          >
            <template v-if="link.logo">
              <img
                src="./logo.svg"
                :alt="link.text"
              >
            </template>
            <template v-else>
              {{ link.text }}
            </template>
          </router-link>
        </li>
      </ul>
      <HeaderAuth :onClick="showAuth" />
    </nav>
    <Auth
      v-if="isAuthVisible"
      @close="hideAuth"
    />
  </div>
</template>

<script>
import Auth from "../Auth/Auth";
import HeaderAuth from "./HeaderAuth";

export default {
  name: "Header",
  components: {
    Auth,
    HeaderAuth
  },
  data: () => ({
    isAuthVisible: false,
    links: [
      { path: "/restaurants", text: "Рестораны" },
      { path: "/delivery", text: "Доставка" },
      { path: "/catalog", text: "Каталог" },
      { path: "/", text: "Главная", logo: true },
      { path: "/about", text: "О нас" },
      { path: "/blog", text: "Новости" },
      { path: "/contacts", text: "Контакты" }
    ]
  }),
  methods: {
    showAuth() {
      this.isAuthVisible = true;
    },
    hideAuth() {
      this.isAuthVisible = false;
    }
  }
};
</script>

<style lang="sass" scoped>
.header
  width: 100%
  height: 72px
  padding: 8px 0

  z-index: 3
  position: sticky
  top: 0

  background: #fff
  border-bottom: 1px solid rgba(#E8EAED, 0.68)

.header__list
  display: flex
  align-items: center
  justify-content: center

  li
    text-align: center
    
    margin-left: 40px
    &:first-child
      margin: 0

    @media (min-width: 2200px)
      margin-left: 64px

    @media (max-width: 1200px)
      margin-left: 24px

    &.header__logo
      margin-left: 72px
      margin-right: 72px

      @media (min-width: 2200px)
        margin-left: 88px
        margin-right: 88px

      @media (max-width: 1200px)
        margin-left: 40px
        margin-right: 40px
      
      & + li
        margin: 0

.header__link
  +tt(reg)
  font-size: 15px

  &,
  &:active,
  &:focus,
  &:visited
    color: $b

.header .header-auth
  position: absolute
  right: 0
  top: 0
  height: 100%

</style>

