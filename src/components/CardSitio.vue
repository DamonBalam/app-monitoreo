<template>
  <v-row no-gutters>
    <v-col xl="2" lg="3" md="4" v-for="item in lista_productos" :key="item.id">
      <v-card
        class="mx-4 my-2"
        max-width="300"
        max-height="180"
        :color="item.color"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-progress-circular
                :rotate="-90"
                :size="60"
                :width="4"
                :value="item.porcent"
                :color="'white'"
              >
                {{ item.porcent }}%
              </v-progress-circular>
            </v-list-item-avatar>
            <v-list-item-title class="title white--text">{{
              item.categoria
            }}</v-list-item-title>
            <v-btn block small text color="white" @click="setSite(item)"
              >VER</v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      lista_productos: [
        {
          id: "001",
          porcent: 100,
          categoria: "SITIO 1",
          color: "#4CAF50"
        },
        {
          id: "002",
          porcent: 60,
          categoria: "SITIO 2",
          color: "#B71C1C"
        },
        {
          id: "003",
          porcent: 100,
          categoria: "SITIO 3",
          color: "#4CAF50"
        },
        {
          id: "004",
          porcent: 56,
          categoria: "SITIO 4",
          color: "#B71C1C"
        },
        {
          id: "005",
          porcent: 100,
          categoria: "SITIO 5",
          color: "#4CAF50"
        },
        {
          id: "006",
          porcent: 0,
          categoria: "SITIO 6",
          color: "#E57373"
        },
        {
          id: "007",
          porcent: 100,
          categoria: "SITIO 7",
          color: "#4CAF50"
        }
      ]
    };
  },
  methods: {
    setSite(item) {
      this.$store.commit("SET_SITE", item);
      this.$router.push("/sitio-detalle");
    }
  }
};
</script>

<style lang="scss" scoped></style>
