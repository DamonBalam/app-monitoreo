<template>
  <v-container>
    <v-row class="text-center justify-space-around">
      <v-col cols="12" class="text-left">
        <span class="display-1 font-weight-bold ml-8">
          Dashboard
          <small class="grey--text">v1.1</small>
        </span>
      </v-col>
      <v-col cols="10">
        <v-card outlined class="pa-2">
          <span class="title font-weight-bold ml-8">
            ESTADO GENERAL DE LOS SITIOS
          </span>
          <CardSitio />
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="subtitle-1"
                >DATOS GENERALES</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-container>
            <CardDatos />
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="10">
        <v-card outlined class="pa-2">
          <span class="title font-weight-bold ml-8">
            Estado en tiempo real
          </span>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardSitio from "../components/CardSitio";
import CardDatos from "../components/CardDatos";
export default {
  components: {
    CardSitio,
    CardDatos
  }
};
</script>

<style lang="scss" scoped></style>
