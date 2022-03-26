<template>
  <v-app-bar
    color="primary"
    elevation="24"
    position="top"
    border="true"
    height="50"
    :class="['app-nav-style']"
  >
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title :class="['website-text-style']">
      Beer shop
    </v-toolbar-title>

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

    <v-btn variant="text" icon="mdi-filter"></v-btn>

    <v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TopNavbarComponent",
  data() {
    return {
      drawer: false,
      buttonsNavbar: [
        {
          title: "Beer List",
          redirection: "BeerList",
        },
        {
          title: "Beer Cart",
          redirection: "BeerCart",
        },
      ],
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
