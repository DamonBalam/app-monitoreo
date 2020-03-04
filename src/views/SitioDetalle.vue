<template>
  <v-container>
    <v-row class="text-center justify-space-around">
      <v-col cols="12" class="text-left">
        <span class="title  ml-8"> Detalle - {{ sitio.name }} </span>
      </v-col>
      <v-col xl="10" lg="12">
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1"
                >ESTADO DE LOS DEVICES</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-container>
            <CardDevice />
          </v-container>
        </v-card>
      </v-col>
      <v-col xl="2" lg="12" md="12" sm="12">
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1"
                >DATOS DEL SITIO</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-container>
            <tacometro />
            <tacometropordia></tacometropordia>
          </v-container>
        </v-card>
      </v-col>
      <v-col xl="12" lg="12">
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">
                <v-chip color="teal darken-1" label text-color="white">
                  ESTADO DEL SWITCH 1
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-container>
            <v-row no-gutters>
              <v-col xl="6" lg="12">
                <LineChart class="grafica" />
                <div class="text-center">
                  <v-chip class="ma-2" color="#E64A19" label text-color="white">
                    ESTADO MENSUAL: FEBRERO
                  </v-chip>
                </div>
              </v-col>
              <v-col xl="6" lg="12">
                <LineChartHora class="grafica" />
                <div class="text-center">
                  <v-chip
                    class="ma-2"
                    color="teal darken-1"
                    label
                    text-color="white"
                  >
                    ESTADO DEL DÍA : 21 DE FEBRERO
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col xl="12" lg="12">
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">
                <v-chip color="teal darken-1" label text-color="white">
                  ESTADO DEL SERVIDOR 1
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-container>
            <v-row no-gutters>
              <v-col xl="6" lg="12">
                <LineChart class="grafica" />
                <div class="text-center">
                  <v-chip class="ma-2" color="#E64A19" label text-color="white">
                    ESTADO MENSUAL: FEBRERO
                  </v-chip>
                </div>
              </v-col>
              <v-col xl="6" lg="12">
                <LineChartHora class="grafica" />
                <div class="text-center">
                  <v-chip
                    class="ma-2"
                    color="teal darken-1"
                    label
                    text-color="white"
                  >
                    ESTADO DEL DÍA : 21 DE FEBRERO
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col xl="12" lg="12">
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1">
                <v-chip color="teal darken-1" label text-color="white">
                  ESTADO DEL ROUTER 1
                </v-chip>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-container>
            <v-row no-gutters>
              <v-col xl="6" lg="12">
                <LineChart class="grafica" />
                <div class="text-center">
                  <v-chip class="ma-2" color="#E64A19" label text-color="white">
                    ESTADO MENSUAL: FEBRERO
                  </v-chip>
                </div>
              </v-col>
              <v-col xl="6" lg="12">
                <LineChartHora class="grafica" />
                <div class="text-center">
                  <v-chip
                    class="ma-2"
                    color="teal darken-1"
                    label
                    text-color="white"
                  >
                    ESTADO DEL DÍA : 21 DE FEBRERO
                  </v-chip>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardDevice from "../components/CardDevice";
// import CardDatos from "../components/CardDatos";
import tacometro from "../components/tacometro";
import tacometropordia from "../components/tacometropordia";
import LineChart from "../components/LineChar";
import LineChartHora from "../components/LineCharHora";
export default {
  components: {
    CardDevice,
    tacometropordia,
    tacometro,
    LineChart,
    LineChartHora
  },
  computed: {
    sitio() {
      return this.$store.state.site;
    }
  }
};
</script>

<style lang="scss" scoped>
.grafica {
  max-height: 200px;
}
</style>
