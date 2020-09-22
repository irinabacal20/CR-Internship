<template>
  <div id="homepage">
    <HeroSection></HeroSection>
    <div class="collection-container">
      <BrowseHeaderCollection categoryName="Most Popular"/>
      <BrowseCollection/>
    </div>

    <div class="collection-container">
      <BrowseHeaderCollection categoryName="Newest"/>
      <BrowseCollection/>
    </div>

    <div class="collection-container">
      <BrowseHeaderCollection categoryName="Recently Updated"/>
      <BrowseCollection/>
    </div>

    <BrowseAnime/>
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import BrowseHeaderCollection from "./components/BrowseHeaderCollection.vue";
import BrowseCollection from "./components/BrowseCollection.vue";
import BrowseAnime from "./components/BrowseAnime.vue";

export default {
  name: "Homepage",
  components: {
    HeroSection,
    BrowseHeaderCollection,
    BrowseAnime,
    BrowseCollection
  }
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


