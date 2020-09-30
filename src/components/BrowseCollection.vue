<template>
  <div id="browse-collection">
    <BrowseHeaderCollection
      categoryName="Most Popular"
      category="/most_popular"
    />
    <div id="browse-cards">
      <BrowseCard
        v-for="popular in mostPopular"
        :key="popular.id"
        :browseCardImage="popular.image"
        :showTitle="popular.title"
        :showType="popular.showType"
      />
    </div>

    <BrowseHeaderCollection categoryName="Newest" category="/newest" />
    <div id="browse-cards">
      <BrowseCard
        v-for="newCard in newest"
        :key="newCard.id"
        :browseCardImage="newCard.image"
        :showTitle="newCard.title"
        :showType="newCard.showType"
      />
    </div>

    <BrowseHeaderCollection
      categoryName="Recently Updated"
      category="/recently_updated"
    />
    <div id="browse-cards">
      <BrowseCard
        v-for="updatedCard in recentlyUpdated"
        :key="updatedCard.id"
        :browseCardImage="updatedCard.image"
        :showTitle="updatedCard.title"
        :showType="updatedCard.showType"
      />
    </div>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
import BrowseHeaderCollection from "./BrowseHeaderCollection.vue";
import { mapActions } from "vuex";

export default {
  name: "BrowseCollection",
  components: {
    BrowseCard,
    BrowseHeaderCollection,
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
      return this.$store.state.home.popularList;
    },
    newest: function () {
      return this.$store.state.home.newestList;
    },
    recentlyUpdated: function () {
      return this.$store.state.home.updatedList;
    },
  },
};
</script>

<style>
#browse-collection {
  margin-top: 10px;
  background: var(--first-color);
  box-shadow: var(--box-shadow);
}

#browse-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: 15px;
}

@media screen and (max-width: 900px) {
  #browse-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 480px) {
  #browse-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
