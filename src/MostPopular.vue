<template>
  <div id="most-popular-category">
    <CategoryCardCollection categoryName="Most Popular" />

    <div id="popular-shows">
      <BrowseCard
        v-for="popularShow in mostPopularCategory"
        :key="popularShow.id"
        :browseCardImage="popularShow.image"
        :showTitle="popularShow.title"
        :showType="popularShow.showType"
        :showId="popularShow.id"
      />
    </div>

    <div v-if="isLoading" class="loading">Loading</div>
    <div class="button-box">
      <button @click="handleShowMore" class="button">Show More</button>
    </div>
  </div>
</template>

<script>
import CategoryCardCollection from "./components/CategoryCardCollection.vue";
import BrowseCard from "./components/BrowseCard.vue";

export default {
  name: "MostPopular",
  components: {
    CategoryCardCollection,
    BrowseCard,
  },
  props: {
    categoryName: String,
  },
  created() {
    this.$store.dispatch("fetchMostPopularPage");
  },
  computed: {
    mostPopularCategory: function () {
      return this.$store.state.categories.mostPopularList;
    },
    isLoading: function () {
      return this.$store.state.categories.isMostPopularLoading;
    },
  },
  methods: {
    handleShowMore: function () {
      this.$store.dispatch("fetchMostPopularPage");
    },
  },
};
</script>

<style>
#popular-shows {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: 15px;
}
</style>
