import axios from "axios";

const browseAllModule = {
  state: () => ({
    areAllShowsLoading: false,
    allShows: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    browseAllShows: []
  }),
  mutations: {},

  actions: {
    fetchAllAnimeShows(context) {}
  }
};

export default browseAllModule;
