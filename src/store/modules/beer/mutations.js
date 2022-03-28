import {
  INIT_BEER_LIST,
  PUSH_BEER_TO_CART_LIST,
  DELETE_BEER_FROM_CART_LIST,
} from "@/store/modules/beer/mutation-types.js";

const mutations = {
  [INIT_BEER_LIST](state, beerList) {
    state.beerList = beerList;
  },
  [PUSH_BEER_TO_CART_LIST](state, beer) {
    if (state.cartList.find((item) => item.id === beer.id) === undefined) {
      state.cartList.push(beer);
    }
  },
  [DELETE_BEER_FROM_CART_LIST](state, beer) {
    state.cartList = state.cartList.filter((item) => item.id !== beer.id);
  },
};

export default mutations;
