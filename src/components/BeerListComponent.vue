<template>
  <v-container :class="['beer-list-component']">
    <v-row>
      <v-col cols="12">BeerList component</v-col>
    </v-row>
    <v-row>
      <v-col :cols="6" v-for="(beer, index) in beerList" :key="index">
        {{ beer.name }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BeerListComponent",
  props: {
    beerList: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  created() {
    console.log("beerList:", this.beerList);
  },
};
</script>

<style lang="scss" scoped></style>
