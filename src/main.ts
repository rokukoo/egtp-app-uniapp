import { createSSRApp } from "vue";
import App from "./App.vue";
import pinia from "./stores";
import i18n from "./locale";
import "./styles/style.css";
import "./styles/tailwind.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(fas);

export function createApp() {
  const app = createSSRApp(App);

  // 使用 pinia
  app.use(pinia);
  // 使用 vue-i18n
  app.use(i18n);
  // 使用 font-awesome-icon
  app.component("font-awesome-icon", FontAwesomeIcon);

  return {
    app,
  };
}
