import { createStore } from "vuex";
import { DrawerModule } from "./Drawer";

export default createStore({
  // Globals
  state: {},
  // Mutations are functions that effect the STATE
  mutations: {},
  // Actions are functions that you call throughout your application that call mutations
  actions: {},
  modules: {
    Drawer: DrawerModule
  }
});
