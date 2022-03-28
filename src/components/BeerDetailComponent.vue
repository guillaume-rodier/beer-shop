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
        <div><b>Description:</b> {{ beer.description }}</div>
      </v-card-text>

      <v-card-text class="text--primary">
        <div><b>Volume:</b> {{ beerVolume }}</div>
      </v-card-text>

      <v-card-text class="text--primary">
        <div>
          <b>Ingredients:</b><br />
          <p
            v-for="(ingredient, index) in beer.ingredients.hops"
            :key="index"
            :class="['my-3']"
          >
            {{ messageForIngredient(ingredient) }}
          </p>
          <p
            v-for="(ingredient, index) in beer.ingredients.malt"
            :key="index"
            :class="['my-3']"
          >
            {{ messageForIngredient(ingredient) }}
          </p>
        </div>
      </v-card-text>

      <v-card-text class="text--primary">
        <div><b>Brewers tips:</b> {{ beer.brewers_tips }}</div>
      </v-card-text>

      <v-card-actions>
        <p :class="['my-0', 'mx-3', 'font-weight-medium', classTextOrdered]">
          {{ orderedMessage }}
        </p>
      </v-card-actions>
    </v-responsive>
  </v-card>
</template>

<script>
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
          ingredients: {
            hops: [
              {
                name: "",
                amount: "",
                value: 0,
                add: "",
              },
            ],
            malt: [
              {
                name: "",
                amount: "",
                value: 0,
                add: "",
              },
            ],
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
    beerVolume() {
      return this.beer.volume.value + " " + this.beer.volume.unit;
    },
  },
  methods: {
    messageForIngredient(ingredient) {
      return (
        ingredient.name +
        ": " +
        ingredient.amount.value +
        " " +
        ingredient.amount.unit +
        " - Added: " +
        ingredient.add
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.beer-list-component {
  .textOrdered {
    color: green;
  }

  .textNotOrdered {
    color: red;
  }
}
</style>
