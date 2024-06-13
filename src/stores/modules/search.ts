import { defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";

export const useSearchStore = defineStore(
  "search",
  () => {
    const history = ref<string[]>([]);
    const hot = ref<string[]>([]);

    const search = (keyWord: string) => {
      let hist = history.value.filter((item) => item !== keyWord);
      hist.unshift(keyWord);
      history.value = hist.slice(0, 10);
    };

    const clearHistory = () => {
      history.value = [];
    };

    return {
      history,
      hot,
      search,
      clearHistory,
    };
  },
  {
    // 配置持久化
    persist: {
      // 调整为兼容多端的API
      storage: {
        setItem(key: string, value: string) {
          uni.setStorageSync(key, value);
        },
        getItem(key: string) {
          return uni.getStorageSync(key);
        },
      },
    },
  }
);
