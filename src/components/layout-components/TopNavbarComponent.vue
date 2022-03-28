<template>
  <v-app-bar
    color="primary"
    elevation="24"
    position="top"
    border="true"
    height="50"
    :class="['app-nav-style']"
  >
    <!--<v-app-bar-nav-icon
      variant="text"
      @click="drawer != drawer"
    ></v-app-bar-nav-icon>-->

    <h4 :class="['website-text-style', 'ml-4']">Beer shop</h4>

    <v-spacer></v-spacer>

    <v-btn
      v-for="(button, index) in buttonsNavbar"
      color="primary"
      :key="index"
      @click="redirection(button.redirection)"
    >
      {{ button.title }}
    </v-btn>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavbarComponent",
  props: {
    buttonsNavbar: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    redirection(routeName) {
      this.$router.push({ name: routeName });
    },
  },
};
</script>

<style lang="scss" scoped>
.app-nav-style {
  .website-text-style {
    font-weight: bold;
  }
}
</style>
