import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "../public/reset.css";
import Homepage from "./Homepage.vue";
import SearchPage from "./SearchPage.vue";
import MoreAnime from "./MoreAnime.vue";
import ShowPage from "./ShowPage.vue";
import ShowEpisodePage from "./ShowEpisodePage.vue";
import MostPopular from "./MostPopular.vue";
import Newest from "./Newest.vue";
import RecentlyUpdated from "./RecentlyUpdated.vue";

import store from "./store/store.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Homepage },
  { path: "/search", component: SearchPage },
  { path: "/more_anime", component: MoreAnime },
  { path: "/showpage", component: ShowPage },
  { path: "/show_episode", component: ShowEpisodePage },
  { path: "/most_popular", component: MostPopular },
  { path: "/newest", component: Newest },
  { path: "/recently_updated", component: RecentlyUpdated }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
