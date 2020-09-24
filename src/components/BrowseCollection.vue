<template>
  <div id="browse-collection">
    <div id="browse-cards">
      <BrowseCard
        browseCardImage="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/826174/826174._SX1280_QL80_TTD_.jpg"
        showTitle="A.I.C.O Incarnation"
        showReview="5/5"
      />
      <BrowseCard
        browseCardImage="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/826174/826174._SX1280_QL80_TTD_.jpg"
        showTitle="A.I.C.O Incarnation"
        showReview="5/5"
      />
      <BrowseCard
        browseCardImage="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/826174/826174._SX1280_QL80_TTD_.jpg"
        showTitle="A.I.C.O Incarnation"
        showReview="5/5"
      />
      <BrowseCard
        browseCardImage="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/826174/826174._SX1280_QL80_TTD_.jpg"
        showTitle="A.I.C.O Incarnation"
        showReview="5/5"
      />
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
