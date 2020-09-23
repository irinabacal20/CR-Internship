<template>
  <div id="show-page">
    <ShowPageHeader/>
    <div id="show-info-container">
      <ShowDescriptionCard/>
      <div id="episodes">
        <h1>Episodes</h1>
        <ShowEpisodeCollection/>
      </div>
    </div>
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader.vue";
import ShowDescriptionCard from "./components/ShowDescriptionCard.vue";
import ShowEpisodeCollection from "./components/ShowEpisodeCollection.vue";

export default {
  name: "ShowPage",
  components: {
    ShowPageHeader,
    ShowDescriptionCard,
    ShowEpisodeCollection
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
#episodes {
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

#episodes > h1 {
  font-family: var(--general-font);
  color: var(--third-color);
  padding-left: 20px;
  padding-top: 20px;
}
</style>
