<template>
  <div id="show-page">
    <ShowPageHeader/>
    <div id="show-info-container">
      <ShowDescriptionCard/>
      <div id="episodes">
        <h1>Episodes</h1>
        <ShowEpisodeCollection/>
      </div>

      <div id="cast-members">
        <h1>Cast</h1>
        <ShowMetaCollection/>
      </div>
    </div>
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader.vue";
import ShowDescriptionCard from "./components/ShowDescriptionCard.vue";
import ShowEpisodeCollection from "./components/ShowEpisodeCollection.vue";
import ShowMetaCollection from "./components/ShowMetaCollection.vue";

export default {
  name: "ShowPage",
  components: {
    ShowPageHeader,
    ShowDescriptionCard,
    ShowEpisodeCollection,
    ShowMetaCollection
  }
};
</script>

<style>
#show-info-container {
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: 80px;
  margin-bottom: 80px;
}
#episodes,
#cast-members {
  margin-top: 50px;
  margin-bottom: 50px;
  background: var(--first-color);
  box-shadow: var(--box-shadow);
}

@media screen and (max-width: 900px) {
  #show-info-container {
    margin-left: auto;
    margin-right: auto;
  }
}

#episodes > h1,
#cast-members > h1 {
  font-family: var(--general-font);
  color: var(--third-color);
  padding-left: 20px;
  padding-top: 20px;
}
</style>
