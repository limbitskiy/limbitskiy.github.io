import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import components from "@/components/UI";
import i18n from "./i18n"

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component);
});

app
  .use(store)
  .use(i18n)
  .mount("#app");
