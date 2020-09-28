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
    saveMostPopular: function (state, { attributes }) {
      state.mostPopular = {
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
      "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank";
    axios.get(url).then(function ({ data }) {
      context.commit("saveMostPopular", data.data);
    });
  }
};

export default homeModule;
