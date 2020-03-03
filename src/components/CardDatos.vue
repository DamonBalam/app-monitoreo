<template>
  <v-row no-gutters>
    <v-col cols="12" class="my-5">
      <v-card
        class="mx-auto"
        max-width="300"
        max-height="180"
        outlined
        :style="`border-color:${card1}`"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-progress-circular
                :rotate="-90"
                :size="60"
                :width="4"
                :value="94.7"
                :color="'blue'"
              >
                {{ 94.7 }}%
              </v-progress-circular>
            </v-list-item-avatar>
            <div class="overline mb-1 ">PROMEDIO MENSUAL</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
    <v-col cols="12" class="my-5">
      <v-card
        class="mx-auto"
        max-width="300"
        outlined
        max-height="180"
        :style="`border-color:${card1}`"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-avatar tile size="80">
              <v-progress-circular
                :rotate="-90"
                :size="60"
                :width="4"
                :value="86"
                :color="'blue'"
              >
                {{ 86 }}%
              </v-progress-circular>
            </v-list-item-avatar>
            <div class="overline mb-1 ">PROMEDIO POR DÍA</div>
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
      card1: "#1976D2"
    };
  }
};
</script>
