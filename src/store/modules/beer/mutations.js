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
    state.cartList.push(beer);
  },
  [DELETE_BEER_FROM_CART_LIST](state, beer) {
    const index = state.cartList.indexOf(beer);
    if (index > -1) {
      state.cartList.splice(index, 1);
    }
  },
};

export default mutations;
