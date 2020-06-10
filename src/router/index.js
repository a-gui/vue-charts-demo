import Vue from "vue";
import Router from "vue-router";
import chartsPage from "@/page/charts";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        name: "charts"
      }
    },
    {
      path: "/charts",
      name: "charts",
      component: chartsPage
    }
  ]
});
