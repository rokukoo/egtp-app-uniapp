import { loginApi, logoutApi } from "@/services/login";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserStore } from "./user";

export const useLoginStore = defineStore("login", () => {
  const { setProfile, profile, clearProfile } = useUserStore();
  const logined = ref(profile?.token != null);

  function setLogined(value: boolean) {
    logined.value = value;
  }

  function login(
    username: string,
    password: string,
    code: string,
    uuid: string
  ) {
    return loginApi(username, password, code, uuid).then((res) => {
      const { code, msg } = res;
      const isFail = code / 100 == 5;
      if (isFail) {
        uni.showToast({
          // title: msg,
          title: "登录失败!",
          icon: "error",
        });
      } else {
        setProfile({ token: res.data.token!! });
        logined.value = true;
      }
      console.log(res);
      return { success: !isFail, ...res };
    });
  }

  function logout() {
    logoutApi().then(() => {
      clearProfile();
      logined.value = false;
    });
  }

  return { logined, login, logout, setLogined };
});
