<template>
  <form @submit.prevent="onSubmit">
    <h2>Регистрация</h2>
    <button>Зарегистрироваться</button>
  </form>
</template>

<script>
export default {
  name: "AuthReg",
  methods: {
    onSubmit() {
      // eslint-disable-next-line
      console.log("submit");
    }
  }
};
</script>

