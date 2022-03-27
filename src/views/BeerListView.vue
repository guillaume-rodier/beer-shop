<template>
  <v-container :class="['beer-list-view']">
    <v-row v-if="beerListData.length > 0" :class="['my-6']">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(beer, index) in beerListData"
        :key="index"
      >
        <BeerListComponent
          :beer="beer"
          :cart-include-beer="cartIncludeBeer(beer)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BeerListComponent from "@/components/BeerListComponent";

export default {
  name: "BeerListView",
  components: {
    BeerListComponent,
  },
  computed: {
    ...mapGetters({
      beerListData: "beer/getBeerList",
      cartList: "beer/getCartList",
    }),
  },
  methods: {
    cartIncludeBeer(beerToFind) {
      var exists = this.cartList.some(function (cart) {
        return cart.id === beerToFind.id;
      });

      if (exists) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
