<template>
  <div id="search-page">
    <SearchPageForm />
    <div id="search-cards-container">
      <p>Series</p>
      <div id="search-card-collection">
        <SearchCard
          v-for="series in seriesCollection"
          :key="series.id"
          :searchCardImage="series.image"
          :showTitle="series.title"
          :showDescription="series.description"
          :showId="series.id"
        />
      </div>
    </div>

    <div id="search-cards-container">
      <p>Movies</p>
      <div id="search-card-collection">
        <SearchCard
          v-for="movies in moviesCollection"
          :key="movies.id"
          :searchCardImage="movies.image"
          :showTitle="movies.title"
          :showDescription="movies.description"
          :showId="movies.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm.vue";
import SearchCard from "./components/SearchCard.vue";

export default {
  name: "ShowPage",
  components: {
    SearchPageForm,
    SearchCard,
  },
  created: function () {
    this.$store.dispatch("fetchSearchPage");
  },
  computed: {
    seriesCollection: function () {
      return this.$store.state.searchPage.seriesList;
    },
    moviesCollection: function () {
      return this.$store.state.searchPage.moviesList;
    },
  },
};
</script>

<style>
#search-cards-container {
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: 80px;
  margin-bottom: 80px;
  font-family: var(--general-font);
  color: var(--third-color);
  font-size: 20px;
}

#search-cards-container > p {
  margin-bottom: 15px;
}

#search-card-collection {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

@media screen and (max-width: 900px) {
  #search-card-collection {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
