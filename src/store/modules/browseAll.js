import axios from "axios";

const browseAllModule = {
  state: () => ({
    areAllShowsLoading: false,
    allAnimeShows: []
  }),
  mutations: {
    saveAllAnime(state, data) {
      state.allAnimeShows = data.map(function (oneItem) {
        return {
          title: oneItem.attributes.titles.en,
          image: oneItem.attributes.posterImage.small,
          slug: oneItem.attributes.slug,
          id: oneItem.id,
          showType: oneItem.attributes.showType
        };
      });
    }
  },
  actions: {
    fetchAllAnimeShows(context) {
      const limit = 20;
      const offset = context.state.allAnimeShows.length;

      context.commit("setIsLoading", {
        propName: "isAllShowsLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          context.commit("saveAllAnime", data.data);

          context.commit("setIsLoading", {
            propName: "isAllShowsLoading",
            value: false
          });
        });
    }
  }
};

export default browseAllModule;
