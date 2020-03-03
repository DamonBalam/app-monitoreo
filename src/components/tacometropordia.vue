<script>
import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import AngularGauge from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

Vue.use(VueFusionCharts, FusionCharts, AngularGauge, FusionTheme);
export default {
  name: "app",
  data() {
    return {
      type: "angulargauge",
      renderAt: "chart-container",
      width: "230",
      height: "180",
      dataFormat: "json",
      datasource: {
        chart: {
          caption: "AVG POR DÍA",
          lowerLimit: "0",
          upperLimit: "100",
          showValue: "1",
          numberSuffix: "%",
          theme: "fusion",
          showToolTip: "0"
        },
        // Chart Data
        colorRange: {
          color: [
            {
              minValue: "0",
              maxValue: "50",
              code: "#F2726F"
            },
            {
              minValue: "50",
              maxValue: "75",
              code: "#FFC533"
            },
            {
              minValue: "75",
              maxValue: "100",
              code: "#62B58F"
            }
          ]
        },
        dials: {
          dial: [
            {
              value: "81"
            }
          ]
        }
      }
    };
  }
};
</script>

<template>
  <div id="app">
    <div id="chart-container">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataformat="dataformat"
        :datasource="datasource"
      >
      </fusioncharts>
    </div>
  </div>
</template>
