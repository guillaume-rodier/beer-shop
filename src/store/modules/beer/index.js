import actions from "@/store/modules/beer/actions";
import getters from "@/store/modules/beer/getters";
import mutations from "@/store/modules/beer/mutations";
import state from "@/store/modules/beer/state";

const beer = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default beer;
