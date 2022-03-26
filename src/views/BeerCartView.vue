<template>
  <v-container :class="['beer-cart-view']">
    <v-row>
      <v-col cols="12">BeerCart View</v-col>
    </v-row>
    <v-row>
      <v-col>
        <BeerCartComponent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BeerCartComponent from "@/components/BeerCartComponent";

export default {
  name: "BeerCartView",
  components: {
    BeerCartComponent,
  },
};
</script>

<style lang="scss" scoped></style>
