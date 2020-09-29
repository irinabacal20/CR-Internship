<template>
  <div id="browse-collection">
    <div id="browse-cards">
      <BrowseCard />
    </div>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";

export default {
  name: "BrowseCollection",
  components: { BrowseCard },
  /*created: function () {
    this.$store.dispatch("fetchMostPopular");
  },

  computed: {
    mostPopular: function () {
      return this.$store.state.home.mostPopular;
    },
  },*/
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
