export const DrawerModule = {
  namespaced: true,
  state: {
    drawer: false
  },
  mutations: {
    TOGGLE_DRAWER(state) {
      state.drawer = !state.drawer;
    }
  },
  actions: {
    toggleDrawer({ commit }) {
      commit("TOGGLE_DRAWER");
    }
  }
};
