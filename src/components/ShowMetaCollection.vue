<template>
  <div id="show-meta-collection">
    <ShowMetaCard
      actorImage="https://www.animenewsnetwork.com/hotlink/images/encyc/P104544-1599089666.1343242355.jpg"
      actor="Haruka Shiraisi"
      characterName="Aiko Tachibana"
    />
    <ShowMetaCard
      actorImage="https://www.animenewsnetwork.com/hotlink/images/encyc/P104544-1599089666.1343242355.jpg"
      actor="Haruka Shiraisi"
      characterName="Aiko Tachibana"
    />
    <ShowMetaCard
      actorImage="https://www.animenewsnetwork.com/hotlink/images/encyc/P104544-1599089666.1343242355.jpg"
      actor="Haruka Shiraisi"
      characterName="Aiko Tachibana"
    />
    <ShowMetaCard
      actorImage="https://www.animenewsnetwork.com/hotlink/images/encyc/P104544-1599089666.1343242355.jpg"
      actor="Haruka Shiraisi"
      characterName="Aiko Tachibana"
    />
    <ShowMetaCard
      actorImage="https://www.animenewsnetwork.com/hotlink/images/encyc/P104544-1599089666.1343242355.jpg"
      actor="Haruka Shiraisi"
      characterName="Aiko Tachibana"
    />
  </div>
</template>

<script>
import ShowMetaCard from "./ShowMetaCard.vue";
export default {
  name: "ShowMetaCollection",
  components: {
    ShowMetaCard
  }
};
</script>

<style>
#show-meta-collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  margin: 20px;
  padding-bottom: 20px;
}

@media screen and (max-width: 900px) {
  #show-meta-collection {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
}
</style>
