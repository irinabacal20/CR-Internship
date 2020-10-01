import axios from "axios";

const searchPageModule = {
  state: () => ({
    seriesList: [],
    moviesList: []
  }),
  mutations: {
    saveSearchedAnime(state, { attributes, id }) {
      const searchCardInfo = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        subtype: attributes.subtype,
        description: attributes.description
      };
      if (searchCardInfo.subtype === "movie") {
        state.moviesList.push(searchCardInfo);
      } else if (searchCardInfo.subtype === "TV") {
        state.seriesList.push(searchCardInfo);
      }
    }
  },
  actions: {
    fetchSearchPage(context, searchQuery) {
      const limit = 10;
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=0&filter%5Btext%5D=${searchQuery}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveSearchedAnime", item);
          });
        });
    }
  }
};

export default searchPageModule;
