import axios from "axios";

const homeModule = {
  state: () => ({
    hero: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    mostPopular: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    newest: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    recentlyUpdated: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    popularList: [],
    newestList: [],
    updatedList: []
  }),
  mutations: {
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.titles.en,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    saveMostPopular: function (state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        showType: attributes.showType
      };
      state.popularList.push(state.mostPopular);
    },
    saveNewest: function (state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        showType: attributes.showType
      };
      state.newestList.push(state.newest);
    },
    saveRecentlyUpdated: function (state, { attributes, id }) {
      state.recentlyUpdated = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        showType: attributes.showType
      };
      state.updatedList.push(state.recentlyUpdated);
    }
  },
  actions: {
    fetchHero: function (context) {
      const url = "https://kitsu.io/api/edge/trending/anime";
      axios.get(url).then(function ({ data }) {
        context.commit("saveHero", data.data[1]);
      });
    },
    fetchMostPopular: function (context) {
      const url =
        "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank";
      axios.get(url).then(function ({ data }) {
        for (let i = 0; i < 6; i++) {
          context.commit("saveMostPopular", data.data[i]);
        }
      });
    },
    fetchNewest: function (context) {
      const url =
        "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-createdAt";
      axios.get(url).then(function ({ data }) {
        for (let i = 0; i < 6; i++) {
          context.commit("saveNewest", data.data[i]);
        }
      });
    },
    fetchRecentlyUpdated: function (context) {
      const url =
        "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt";
      axios.get(url).then(function ({ data }) {
        for (let i = 0; i < 6; i++) {
          context.commit("saveRecentlyUpdated", data.data[i]);
        }
      });
    }
  }
};

export default homeModule;
