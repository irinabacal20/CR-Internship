import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home.js";
import categories from "./modules/categories.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home,
    categories: categories
  }
});

export default store;
