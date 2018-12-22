<template>
  <form @submit.prevent="onSubmit">
    <h2>Вход</h2>
    <button @click="$emit('tabClick', 'recovery')">Забыли пароль?</button>
    <button>Войти</button>
  </form>
</template>

<script>
export default {
  name: "AuthLogin",
  methods: {
    onSubmit() {
      // eslint-disable-next-line
      console.log("submit");
    }
  }
};
</script>

