<template>
  <v-container>
    <v-row class="text-center justify-space-around">
      <v-col cols="12" class="text-left">
        <span class="title  ml-8"> Detalle - {{ sitio.name }} </span>
      </v-col>
      <v-col cols="10">
        <v-card outlined class="pa-2">
          <span class="title font-weight-bold ml-8">
            ESTADO DE LOS DEVICES
          </span>
          <CardDevice />
        </v-card>
      </v-col>
      <v-col cols="2">
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
      <v-col cols="10"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardDevice from "../components/CardDevice";
// import CardDatos from "../components/CardDatos";
import tacometro from "../components/tacometro";
import tacometropordia from "../components/tacometropordia";
export default {
  components: {
    CardDevice,
    tacometropordia,
    tacometro
  },
  computed: {
    sitio() {
      return this.$store.state.site;
    }
  }
};
</script>

<style lang="scss" scoped></style>
