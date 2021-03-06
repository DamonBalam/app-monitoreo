import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import AngularGauge from "fusioncharts/fusioncharts.widgets";

Vue.config.productionTip = false;
Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme, AngularGauge);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
