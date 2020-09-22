<template>
  <div id="browse-collection">
    <div id="browse-cards">
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
      <BrowseCard/>
    </div>
  </div>
</template>

<script>
import BrowseCard from "./BrowseCard.vue";

export default {
  name: "BrowseCollection",
  components: { BrowseCard }
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
  margin-left: 25px;
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
