import axios from "axios";

const homeModule = {
  state: () => ({
    hero: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
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
    }
  },
  actions: {
    fetchHero: function (context) {
      const url = "https://kitsu.io/api/edge/trending/anime";
      axios.get(url).then(function ({ data }) {
        context.commit("saveHero", data.data[1]);
      });
    }
  }
};

export default homeModule;
