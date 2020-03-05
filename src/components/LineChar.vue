<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [
        "D1",
        "D2",
        "D3",
        "D4",
        "D5",
        "D6",
        "D7",
        "D8",
        "D9",
        "D10",
        "D11",
        "D12",
        "D13",
        "D14",
        "D15",
        "D16",
        "D17",
        "D18",
        "D19",
        "D20",
        "D21"
      ],
      datasets: [
        {
          label: "Disponibilidad",
          fill: false,
          borderColor: "#EF6C00",
          data: [
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
            100,
            0,
            100,
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
      fill: false,
      legend: {
        display: true,
        text: "porcentaje"
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
