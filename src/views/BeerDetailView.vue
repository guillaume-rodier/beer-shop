<template>
  <v-container :class="['beer-detail-view']">
    <v-row>
      <v-col cols="12">BeerDetail View</v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BeerDetailComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeerDetailComponent from "@/components/BeerDetailComponent";

export default {
  name: "BeerDetailView",
  components: {
    BeerDetailComponent,
  },
  props: {
    beerId: {
      type: Number,
      required: true,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
