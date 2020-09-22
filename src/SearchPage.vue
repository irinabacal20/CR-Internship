<template>
  <div id="search-page">
    <SearchPageForm/>
    <div id="search-cards-container">
      <p>Series</p>
      <div id="search-card-collection">
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
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
    SearchCard
  }
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
