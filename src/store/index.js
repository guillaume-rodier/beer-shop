import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import beer from "@/store/modules/beer/index";

export default createStore({
  modules: { beer },
  plugins: [createPersistedState()],
});
