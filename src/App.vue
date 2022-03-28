<template>
  <v-app light :class="['app-style']">
    <TopNavbarComponent :buttons-navbar="buttonsNavbar" />
    <v-main :class="['main-style']">
      <v-progress-circular
        v-if="!showList"
        indeterminate
        color="primary"
        :size="70"
        :width="7"
        :class="['loader-style', 'mx-auto']"
      ></v-progress-circular>
      <router-view v-else />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import TopNavbarComponent from "@/components/layout-components/TopNavbarComponent";

export default {
  name: "App",
  components: {
    TopNavbarComponent,
  },
  data() {
    return {
      showList: true,
      drawer: false,
      buttonsNavbar: [
        {
          title: "Beer List",
          redirection: "BeerList",
        },
        {
          title: "Beer Details",
          redirection: "BeerDetail",
        },
        {
          title: "Beer Cart",
          redirection: "BeerCart",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      initBeerList: "beer/initBeerList",
    }),
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "Beer Shop";
    },
  },
  async created() {
    this.showList = false;
    await this.initBeerList();
    this.showList = true;
  },
};
</script>

<style lang="scss" scoped>
.app-style {
  .main-style {
    position: relative;

    .loader-style {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
