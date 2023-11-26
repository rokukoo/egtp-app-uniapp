import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";
import i18n from "./locales"
import './styles/style.css'

export function createApp() {
  const app = createSSRApp(App);

  // 使用 pinia
  app.use(pinia)
  // 使用 vue-i18n
  app.use(i18n)

  return {
    app,
  };
}
