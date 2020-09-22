<template>
  <div id="show-page">
    <ShowPageHeader/>
    <div id="show-info-container">
      <ShowDescriptionCard/>
    </div>
  </div>
</template>

<script>
import ShowPageHeader from "./components/ShowPageHeader.vue";
import ShowDescriptionCard from "./components/ShowDescriptionCard.vue";

export default {
  name: "ShowPage",
  components: {
    ShowPageHeader,
    ShowDescriptionCard
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

@media screen and (max-width: 900px) {
  #show-info-container {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
