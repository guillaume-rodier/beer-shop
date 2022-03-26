<template>
  <v-app light :class="['app-style']">
    <TopNavbarComponent />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNavbarComponent from "@/components/layout-components/TopNavbarComponent";

export default {
  name: "App",
  components: {
    TopNavbarComponent,
  },
};
</script>

<style lang="scss" scoped></style>
