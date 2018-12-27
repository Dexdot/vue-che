<template>
  <div>
    <button
      v-if="isUserLoggedIn"
      @click="logOut"
    >Выйти из аккаунта</button>
  </div>
</template>

<script>
import { Notification } from "element-ui";

export default {
  name: "PagePersonal",
  computed: {
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    logOut() {
      this.$store
        .dispatch("logOut")
        .then(() => {
          this.$router.push("/");

          Notification.success({
            title: "Вы неавторизованы",
            message: ""
          });
        })
        .catch(err => {
          Notification.error({
            title: "Ошибка",
            message: this.$store.getters.error,
            onClose: () => {
              this.$store.dispatch("clearError");
            }
          });
        });
    }
  }
};
</script>