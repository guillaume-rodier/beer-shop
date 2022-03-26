import {
  INIT_BEER_LIST,
  PUSH_BEER_TO_CART_LIST,
  DELETE_BEER_FROM_CART_LIST,
} from "@/store/modules/beer/mutation-types.js";

const mutations = {
  [INIT_BEER_LIST](state, beerList) {
    state.beerList = beerList;
  },
  [PUSH_BEER_TO_CART_LIST](state) {
    console.log("cartList:", state.cartList);
  },
  [DELETE_BEER_FROM_CART_LIST](state) {
    console.log("cartList:", state.cartList);
  },
};

export default mutations;
