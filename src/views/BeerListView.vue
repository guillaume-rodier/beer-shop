<template>
  <v-container v-if="showList" :class="['beer-list-view']">
    <v-row>
      <v-col cols="12"> BeerListView </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <BeerListComponent :beer-list="beerListData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BeerListComponent from "@/components/BeerListComponent.vue";

export default {
  name: "BeerListView",
  components: {
    BeerListComponent,
  },
  computed: {
    ...mapGetters({
      beerListData: "beer/getBeerList",
    }),
  },
  methods: {
    ...mapActions({
      initBeerList: "beer/initBeerList",
    }),
  },
  data() {
    return {
      showList: true,
    };
  },
  async created() {
    this.showList = false;
    await this.initBeerList();
    this.showList = true;
  },
};
</script>
