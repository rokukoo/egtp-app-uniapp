import { defineStore } from "pinia";
import { ref } from "vue";

export const useLangStore = defineStore("lang", () => {
  const langId = ref(1);

  const setLangId = (args: number) => {
    langId.value = args;
  };

  return { langId, setLangId };
});
