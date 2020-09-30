import axios from "axios";

const categoriesModule = {
  state: () => ({
    isMostPopularLoading: false,
    mostPopular: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    isNewestLoading: false,
    newest: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    isRecentlyUpdatedLoading: false,
    recentlyUpdated: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    mostPopularList: [],
    newestList: [],
    updatedList: []
  }),

  mutations: {
    setIsLoading(state, { propName, value }) {
      state[propName] = value;
    },
    saveMostPopularPage(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.titles.en,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        showType: attributes.showType
      };
      state.mostPopularList.push(state.mostPopular);
    },
    saveNewestPage(state, { attributes, id }) {
      state.newest = {
        title: attributes.titles.en,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        showType: attributes.showType
      };
      state.newestList.push(state.newest);
    },
    saveRecentlyUpdatedPage(state, { attributes, id }) {
      state.recentlyUpdated = {
        title: attributes.titles.en,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        showType: attributes.showType
      };
      state.updatedList.push(state.recentluUpdated);
    }
  },
  actions: {
    fetchMostPopularPage(context) {
      const limit = 10;
      const offset = context.state.mostPopularList.length;

      context.commit("setIsLoading", {
        propName: "isMostPopularLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveMostPopularPage", item);
          });

          context.commit("setIsLoading", {
            propName: "isMostPopularLoading",
            value: false
          });
        });
    },
    fetchNewestPage(context) {
      const limit = 20;
      const offset = context.state.newestList.length;

      context.commit("setIsLoading", {
        propName: "isNewestLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?sort=-createdAt&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveNewestPage", item);
          });

          context.commit("setIsLoading", {
            propName: "isNewestLoading",
            value: false
          });
        });
    },
    fetchRecentlyUpdatedPage(context) {
      const limit = 20;
      const offset = context.state.updatedList.length;

      context.commit("setIsLoading", {
        propName: "isRecentlyUpdatedLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?sort=-updatedAt&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveRecentlyUpdatedPage", item);
          });

          context.commit("setIsLoading", {
            propName: "isRecentlyUpdatedLoading",
            value: false
          });
        });
    }
  }
};

export default categoriesModule;
