<template>
  <div>
    <router-link to="/">Главная</router-link>
    <router-link to="/catalog">Каталог</router-link>
    <HeaderAuth />
  </div>
</template>

<script>
import HeaderAuth from "./HeaderAuth";

export default {
  name: "Header",
  components: {
    HeaderAuth
  }
};
</script>

