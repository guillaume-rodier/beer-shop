import axios from "axios";

const actions = {
  async initBeerList({ commit }) {
    const beerPunkApi = await axios.get(
      "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"
    );

    commit("INIT_BEER_LIST", beerPunkApi.data);
  },
  pushBeerToCartList({ commit }, beer) {
    commit("PUSH_BEER_TO_CART_LIST", beer);
  },
  deleteBeerToCartList({ commit }, beer) {
    commit("DELETE_BEER_FROM_CART_LIST", beer);
  },
};

export default actions;
