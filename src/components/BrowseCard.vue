<template>
  <div id="browse-card">
    <div id="browse-card-image">
      <img :src="`${browseCardImage}`" alt="Browse Card Image">
    </div>
    <div id="show-title">{{showTitle}}</div>
    <div id="show-review">{{showReview}}</div>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  data() {
    return {
      browseCardImage:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/826174/826174._SX1280_QL80_TTD_.jpg",
      showTitle: "A.I.C.O Incarnation",
      showReview: "5/5"
    };
  }
};
</script>

<style>
#browse-card {
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
}

#browse-card-image > img {
  width: 150px;
  height: 66, 66%;
  object-fit: cover;
  object-position: top;
  box-shadow: var(--box-shadow);
}

#show-title,
#show-review {
  text-align: left;
  font-family: var(--general-font);
  font-size: 15px;
  padding: 5px 0;
}
</style>
