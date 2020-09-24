<template>
  <div id="category-card-collection">
    <h1 id="category-name">{{categoryName}}</h1>

    <div id="show-category-cards">
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
  name: "CategoryCardCollection",
  components: {
    BrowseCard
  },
  props: {
    categoryName: String
  }
};
</script>

<style>
#category-card-collection {
  background: var(--first-color);
  box-shadow: var(--box-shadow);
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: 80px;
  margin-bottom: 80px;
}

#show-category-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: 15px;
}

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
