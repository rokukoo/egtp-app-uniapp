import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";
export function createApp() {
  const app = createSSRApp(App);

  // 使用 pinia
  app.use(pinia)

  return {
    app,
  };
}
