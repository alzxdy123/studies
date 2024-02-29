import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/tools/i18n";
import VeeValidate from "vee-validate";
import id from "vee-validate/dist/locale/id";
import en from "vee-validate/dist/locale/en";

import { Validator } from "vee-validate";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "jam-icons/css/jam.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Validator.localize("id", id);
Validator.localize("en", en);
Vue.use(VeeValidate, {
  // fieldsBagName: 'vvFields',
  inject: true,
  fieldsBagName: "veeFields",
  // errorBagName: 'veeErrors'
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
