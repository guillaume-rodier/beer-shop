<template>
  <v-card :class="['beer-cart-component']">
    <v-img
      gradient="to bottom, rgba(0,0,0,.17) 40%, rgba(0,0,0,.8)"
      :aspect-ratio="1"
      :class="['white--text', 'align-end']"
      :src="beer.image_url"
    >
      <v-card-title v-text="beer.name" :style="titleStyle"></v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "BeerCartComponent",
  computed: {
    titleStyle() {
      return {
        color: this.$vuetify.theme.themes.light.title,
      };
    },
  },
  props: {
    beer: {
      type: Object,
      required: true,
      default() {
        return {
          name: "",
          image_url: "",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
