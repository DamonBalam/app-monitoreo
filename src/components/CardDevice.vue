<template>
  <v-row no-gutters>
    <v-col xl="4" lg="3" md="4" v-for="item in lista_productos" :key="item.id">
      <v-card
        class="mx-auto my-6"
        max-width="300"
        max-height="180"
        :color="item.active == true ? item.color : 'blue-grey lighten-2'"
        :disabled="!item.active"
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
          active: true,
          categoria: "SWITCH 1",
          color: "#4CAF50"
        },
        {
          id: "002",
          porcent: 100,
          active: true,
          categoria: "SERVIDOR 1",
          color: "#4CAF50"
        },
        {
          id: "003",
          porcent: 100,
          active: true,
          categoria: "ROUTER 1",
          color: "#4CAF50"
        },
        {
          id: "004",
          porcent: 0,
          active: false,
          categoria: "ROUTER 2",
          color: "#B71C1C"
        },
        {
          id: "005",
          porcent: 0,
          active: false,
          categoria: "SWITCH 2",
          color: "#4CAF50"
        },
        {
          id: "006",
          porcent: 0,
          active: false,
          categoria: "SERVIDOR 2",
          color: "#E57373"
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
