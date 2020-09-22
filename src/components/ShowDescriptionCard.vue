<template>
  <div id="show-description-card">
    <div id="show-card-contents">
      <img :src="`${searchCardImage}`" alt="Browse Card Image">
      <div id="show-card-description">
        <p id="show-card-title">{{showTitle}}</p>
        <p id="show-card-rating">Rating: {{showRating}}</p>
        <p>{{showDescription}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDescriptionCard",
  data() {
    return {
      searchCardImage:
        "https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/826174/826174._SX1280_QL80_TTD_.jpg",
      showTitle: "A.I.C.O Incarnation",
      showRating: "5/5",
      showDescription:
        "In 2035, a biological research project to create an Artificial and Intelligent Cellular Organism (A.I.C.O.) went awry, resulting in an incident called the Burst which transformed Kurobe Gorge into a quarantine area infested by a rampant growth of synthetic organisms called Matter. Two years later, high school student Aiko Tachibana finds that she may be the duplicate of a girl trapped within the Matter whose family disappeared in the Burst."
    };
  }
};
</script>

<style>
#show-description-card {
  background: var(--first-color);
  box-shadow: var(--box-shadow);
}

#show-card-contents > img {
  width: 150px;
  height: 66, 66%;
  object-fit: cover;
  object-position: top;
}

#show-card-contents {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-family: var(--general-font);
  color: var(--third-color);
  font-size: 15px;
  text-align: justify;
}

#show-card-description {
  margin-left: 20px;
}

#show-card-description > p {
  margin: 10px 20px;
}

#show-card-title {
  font-weight: bold;
  font-size: 18px;
}

</style>
