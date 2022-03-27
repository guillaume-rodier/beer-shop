<template>
  <v-app light :class="['app-style']">
    <TopNavbarComponent />
    <v-main>
      <router-view v-if="showList" />
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
  methods: {
    ...mapActions({
      initBeerList: "beer/initBeerList",
    }),
  },
  async created() {
    this.showList = false;
    await this.initBeerList();
  },
  mounted() {
    this.showList = true;
  },
};
</script>

<style lang="scss" scoped></style>
