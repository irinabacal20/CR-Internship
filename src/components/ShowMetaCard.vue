<template>
  <div id="show-meta-card">
    <img :src="`${actorImage}`" alt="Show Character">
    <div id="character-info">
      <p id="actor-name">{{actor}}</p>
      <p id="character-name">{{characterName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMetaCard",
  props: {
    actorImage: String,
    actor: String,
    characterName: String
  }
};
</script>

<style>
#show-meta-card {
  display: flex;
  width: 100%;
  font-family: var(--general-font);
  color: var(--third-color);
  box-shadow: var(--box-shadow);
}

#show-meta-card > img {
  width: 30%;
  object-fit: cover;
  object-position: top;
}

#actor-name {
  font-weight: bold;
}

#character-info > p {
  padding: 8px;
}
#character-info {
  width: 50%;
}

#character-name {
  font-size: 14px;
}
</style>
