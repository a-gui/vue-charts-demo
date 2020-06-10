import Vue from "vue";
import App from "./App.vue";

// ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// 引入v-chart图表生成库
import VCharts from "v-charts";

import router from "./router/index";

Vue.use(VCharts);

new Vue({
  el: "#app",
  router,
  render: (h) => h(App)
}).$mount("#app");
