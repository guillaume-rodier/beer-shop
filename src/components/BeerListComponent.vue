<template>
  <v-card elevation="3" :class="['beer-list-component']">
    <v-responsive :aspect-ratio="9 / 15">
      <v-img
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        aspect-ratio="1"
        :src="beer.image_url"
      />

      <v-card-title v-text="beer.name" />

      <v-card-text class="text--primary">
        <div><b>Volume:</b> {{ beerVolume }}</div>
      </v-card-text>

      <v-card-actions :class="['actions-style']">
        <p :class="['my-0', 'mx-3', 'font-weight-medium', classTextOrdered]">
          {{ orderedMessage }}
        </p>

        <v-spacer></v-spacer>

        <v-btn v-if="beerInCard" icon @click="pushBeerToCartList(beer)">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-else icon @click="deleteBeerToCartList(beer)">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-responsive>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BeerListComponent",
  props: {
    beer: {
      type: Object,
      required: false,
      default() {
        return {
          name: "",
          description: "",
          image_url: "",
          volume: {
            value: 0,
            unit: "",
          },
        };
      },
    },
    cartIncludeBeer: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      cartList: "beer/getCartList",
    }),
    classTextOrdered() {
      if (this.cartIncludeBeer) {
        return "textOrdered";
      } else {
        return "textNotOrdered";
      }
    },
    orderedMessage() {
      if (this.cartIncludeBeer) {
        return "Ordered";
      } else {
        return "Not ordered";
      }
    },
    beerInCard() {
      return (
        this.cartList.find((item) => item.id === this.beer.id) === undefined
      );
    },
    beerVolume() {
      return this.beer.volume.value + " " + this.beer.volume.unit;
    },
  },
  methods: {
    ...mapActions({
      pushBeerToCartList: "beer/pushBeerToCartList",
      deleteBeerToCartList: "beer/deleteBeerToCartList",
    }),
  },
};
</script>

<style lang="scss" scoped>
.beer-list-component {
  position: relative;

  .actions-style {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
  }

  .textOrdered {
    color: green;
  }

  .textNotOrdered {
    color: red;
  }
}
</style>
