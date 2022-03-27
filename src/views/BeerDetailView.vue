<template>
  <v-container :class="['beer-list-view']">
    <v-row v-if="beerListData.length > 0" :class="['my-6']">
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="(beer, index) in beerListData"
        :key="index"
      >
        <BeerDetailComponent
          :beer="beer"
          :cart-include-beer="cartIncludeBeer(beer)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import BeerDetailComponent from "@/components/BeerDetailComponent";

export default {
  name: "BeerListView",
  components: {
    BeerDetailComponent,
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
