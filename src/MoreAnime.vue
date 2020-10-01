<template>
  <div id="browse-more-page">
    <div id="more-anime">More Anime</div>
    <div id="all-anime-shows">
      <BrowseCard
        v-for="animeShow in allAnimeShows"
        :key="animeShow.id"
        :browseCardImage="animeShow.image"
        :showTitle="animeShow.title"
        :showType="animeShow.showType"
        :showId="animeShow.id"
      />
    </div>

    <div v-if="isLoading" class="loading">Loading</div>
    <div id="button-box">
      <button @click="handleShowMore" class="button">Show More</button>
    </div>
  </div>
</template>

<script>
import BrowseCard from "./components/BrowseCard.vue";

export default {
  name: "MoreAnime",
  components: {
    BrowseCard,
  },
  created() {
    this.$store.dispatch("fetchAllAnimeShows");
  },
  computed: {
    allAnimeShows: function () {
      return this.$store.state.browseAll.allAnimeShows;
    },
    isLoading: function () {
      return this.$store.state.browseAll.isAllShowsLoading;
    },
  },
  methods: {
    handleShowMore: function () {
      this.$store.dispatch("fetchAllAnimeShows");
    },
  },
};
</script>

<style>
#browse-more-page {
  background: var(--first-color);
  font-family: var(--general-font);
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: 80px;
  margin-bottom: 80px;
  color: var(--third-color);
}

#more-anime {
  padding: 20px;
  font-weight: bold;
}

#all-anime-shows {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  margin: 15px;
}
.button {
  background: var(--third-color);
  border: none;
  padding: 10px;
  color: var(--first-color);
  border-radius: var(--button-border-radius);
  cursor: pointer;
  display: block;
  justify-content: center;
  font-family: var(--general-font);
}

.button:hover {
  background: var(--button-hover);
}

#button-box {
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
}
.loading {
  animation: flash 3s ease infinite;
  font-size: 25px;
  text-align: center;
}

@keyframes flash {
  from {
    color: var(--third-color);
  }
  to {
    color: white;
  }
}

@media screen and (max-width: 900px) {
  #all-anime-shows {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    margin: auto;
  }
  #browse-more-page {
    margin: auto;
  }
}

@media screen and (max-width: 480px) {
  #all-anime-shows {
    display: grid;
    grid-template-columns: 80%;
    grid-gap: 50px;
    display: block;
    margin: auto;
  }
  #browse-more-page {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
