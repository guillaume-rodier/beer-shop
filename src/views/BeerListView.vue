<template>
  <v-container :class="['beer-list-view']">
    <v-row>
      <v-col cols="12"> BeerListView </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BeerListComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeerListComponent from "@/components/BeerListComponent.vue";

export default {
  name: "BeerListView",
  components: {
    BeerListComponent,
  },
};
</script>
