<template>
  <div id="show-meta-card">
    <img :src="`${character}`" alt="Show Character">
    <div id="character-info">
      <p>{{actor}}</p>
      <p>{{characterName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMetaCard",
  props: {
    character: String,
    actor: String,
    characterName: String
  }
};
</script>

<style>
#show-meta-card {
  display: flex;
  justify-content: space-evenly;
}

#show-meta-card > img {
  width: 100%;
  height: 100%;
}
</style>
