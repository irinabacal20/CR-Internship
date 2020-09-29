<template>
  <div id="homepage">
    <HeroSection></HeroSection>
    <div class="collection-container">
      <BrowseHeaderCollection
        categoryName="Most Popular"
        category="/most_popular"
      />
      <BrowseCollection>
        <BrowseCard
          v-for="popular in mostPopular"
          :key="popular.id"
          :browseCardImage="popular.image"
          :showTitle="popular.title"
          :showReview="popular.rating"
      /></BrowseCollection>
    </div>

    <div class="collection-container">
      <BrowseHeaderCollection categoryName="Newest" category="/newest" />
      <BrowseCollection>
        <BrowseCard
          v-for="newCard in newest"
          :key="newCard.id"
          :browseCardImage="newCard.image"
          :showTitle="newCard.title"
          :showReview="newCard.rating"
        />
      </BrowseCollection>
    </div>

    <div class="collection-container">
      <BrowseHeaderCollection
        categoryName="Recently Updated"
        category="/recently_updated"
      />
      <BrowseCollection>
        <BrowseCard
          v-for="updatedCard in recentlyUpdated"
          :key="updatedCard.id"
          :browseCardImage="updatedCard.image"
          :showTitle="updatedCard.title"
          :showReview="updatedCard.rating"
        />
      </BrowseCollection>
    </div>

    <BrowseAnime />
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import BrowseHeaderCollection from "./components/BrowseHeaderCollection.vue";
import BrowseCollection from "./components/BrowseCollection.vue";
import BrowseAnime from "./components/BrowseAnime.vue";
import BrowseCard from "./components/BrowseCard.vue";
import { mapActions } from "vuex";

export default {
  name: "Homepage",
  components: {
    HeroSection,
    BrowseHeaderCollection,
    BrowseAnime,
    BrowseCollection,
    BrowseCard,
  },
  methods: mapActions([
    "fetchMostPopular",
    "fetchNewest",
    "fetchRecentlyUpdated",
  ]),
  created() {
    this.fetchMostPopular();
    this.fetchNewest();
    this.fetchRecentlyUpdated();
  },

  computed: {
    mostPopular: function () {
      return this.$store.state.home.mostPopular;
    },
    newest: function () {
      return this.$store.state.home.newest;
    },
    recentlyUpdated: function () {
      return this.$store.state.home.recentlyUpdated;
    },
  },
};
</script>

<style>
.collection-container {
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: 80px;
  margin-bottom: 80px;
}

@media screen and (max-width: 900px) {
  .collection-container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>


