<template>
  <div id="homepage">
    <HeroSection></HeroSection>
    <div class="collection-container"><BrowseCollection /></div>
    <BrowseAnime />
  </div>
</template>

<script>
import HeroSection from "./components/HeroSection.vue";
import BrowseCollection from "./components/BrowseCollection.vue";
import BrowseAnime from "./components/BrowseAnime.vue";

export default {
  name: "Homepage",
  components: {
    HeroSection,
    BrowseAnime,
    BrowseCollection,
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


