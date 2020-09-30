<template>
  <div id="category-card-collection">
    <h1 id="category-name">{{ categoryName }}</h1>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";
import { mapActions } from "vuex";
export default {
  name: "CategoryCardCollection",
  components: {
    BrowseCard,
  },
  props: {
    categoryName: String,
  },
  methods: mapActions(["fetchMostPopularPage"]),
  created() {
    this.fetchMostPopularPage();
  },
  computed: {
    mostPopular: function () {
      return this.$store.state.categories.mostPopularList;
    },
  },
};
</script>

<style>
#category-name {
  padding-top: 20px;
  padding-left: 20px;
  color: var(--third-color);
  font-family: var(--general-font);
}

@media screen and (max-width: 900px) {
  #show-category-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  #category-card-collection {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
