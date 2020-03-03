import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: true,
    site: {
      name: ""
    }
  },
  mutations: {
    SET_DRAWER(state) {
      state.drawer = !state.drawer;
    },
    SET_SITE(state, item) {
      state.site.name = item.categoria;
    }
  },
  actions: {},
  modules: {}
});
