<template>
  <form @submit.prevent="onSubmit">
    <h2>Восстановление пароля</h2>
    <button>Отправить</button>
  </form>
</template>

<script>
export default {
  name: "AuthRecovery",
  methods: {
    onSubmit() {
      // eslint-disable-next-line
      console.log("submit");
    }
  }
};
</script>

