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
    popularList: [],
    newestList: [],
    recentlyUpdatedList: []
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
    saveMostPopular: function (state, popularShows) {
      state.popularList = popularShows.forEach((popularShow, id) => {
        return {
          id: popularShow.id,
          image: popularShow.image,
          title: popularShow.title,
          rating: popularShow.rating
        };
      });
    },
    saveNewest: function (state, newestShows) {
      state.newestList = newestShows.forEach((newestShow, id) => {
        return {
          id: newestShow.id,
          image: newestShow.image,
          title: newestShow.title,
          rating: newestShow.rating
        };
      });
    },
    saveRecentlyUpdated: function (state, recentlyUpdatedShows) {
      state.recentlyUpdatedList = recentlyUpdatedShows.forEach(
        (recentlyUpdatedShow, id) => {
          return {
            id: recentlyUpdatedShow.id,
            image: recentlyUpdatedShow.image,
            title: recentlyUpdatedShow.title,
            rating: recentlyUpdatedShow.rating
          };
        }
      );
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
      axios.get(url).then(function ({ popularShows }) {
        context.commit("saveMostPopular", popularShows);
      });
    },
    fetchNewest: function (context) {
      const url =
        "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-createdAt";
      axios.get(url).then(function ({ newestShows }) {
        context.commit("saveNewest", newestShows);
      });
    },
    fetchRecentlyUpdated: function (context) {
      const url =
        "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt";
      axios.get(url).then(function ({ recentlyUpdatedShows }) {
        context.commit("saveRecentlyUpdated", recentlyUpdatedShows);
      });
    }
  }
};

export default homeModule;
