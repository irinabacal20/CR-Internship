import Vue from "vue";
import Vuex from "vuex";

import home from "./modules/home.js";
import categories from "./modules/categories.js";
import browseAll from "./modules/browseAll.js";
import searchPage from "./modules/searchPage.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home: home,
    categories: categories,
    browseAll: browseAll,
    searchPage: searchPage
  }
});

export default store;
