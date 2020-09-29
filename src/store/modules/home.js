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
      id: 0,
      image: "",
      title: "",
      rating: ""
    },

    newest: {
      id: 0,
      image: "",
      title: "",
      rating: ""
    },
    recentlyUpdated: {
      id: 0,
      image: "",
      title: "",
      rating: ""
    }
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
        id: id,
        image: attributes.coverImage.original,
        title: attributes.titles.en,
        rating: attributes.averageRating
      };
    },
    saveNewest: function (state, { attributes, id }) {
      state.newest = {
        id: id,
        image: attributes.coverImage.original,
        title: attributes.titles.en,
        rating: attributes.averageRating
      };
    },
    saveRecentlyUpdated: function (state, { attributes, id }) {
      state.recentlyUpdated = {
        id: id,
        image: attributes.coverImage.original,
        title: attributes.titles.en,
        rating: attributes.averageRating
      };
    }
  },
  actions: {
    fetchHero: function (context) {
      const url = "https://kitsu.io/api/edge/trending/anime";
      axios.get(url).then(function ({ data }) {
        context.commit("saveHero", data.data[1]);
      });
    }
  },
  fetchMostPopular: function (context) {
    const url =
      "https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0&sort=popularityRank";
    axios.get(url).then(function ({ data }) {
      context.commit("saveMostPopular", data.data);
    });
  },
  fetchNewest: function (context) {
    const url =
      "https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0&sort=-createdAt";
    axios.get(url).then(function ({ data }) {
      context.commit("saveNewest", data.data);
    });
  },
  fetchRecentlyUpdated: function (context) {
    const url =
      "https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0&sort=-createdAt";
    axios.get(url).then(function ({ data }) {
      context.commit("saveRecentlyUpdated", data.data);
    });
  }
};

export default homeModule;
