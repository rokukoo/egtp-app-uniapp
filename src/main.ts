import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";
import i18n from "./locale";
import "./styles/style.css";
import "./styles/tailwind.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

export function createApp() {
  const app = createSSRApp(App);

  // 使用 pinia
  app.use(pinia);
  // 使用 vue-i18n
  app.use(i18n);
  // 使用 oh-vue-icons
  app.component("v-icon", OhVueIcon);

  return {
    app,
  };
}
