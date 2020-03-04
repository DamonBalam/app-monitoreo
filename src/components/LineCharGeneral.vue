<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00"
      ],
      datasets: [
        {
          label: "estado",
          fill: false,
          borderColor: "#43A047",
          data: [
            100,
            100,
            0,
            100,
            100,
            0,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            100,
            0,
            100,
            100,
            100,
            100,
            100,
            100
          ]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      fill: false
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
