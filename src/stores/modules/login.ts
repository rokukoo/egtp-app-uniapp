import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const logined = ref(false);

  function login(account: string, password: string) {
    logined.value = true;
  }

  function logout() {
    logined.value = false;
  }

  return { logined, login, logout };
});
