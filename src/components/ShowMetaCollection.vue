<template>
  <div id="show-meta-collection">
    <ShowMetaCard
      character="https://www.google.com/search?q=Haruka+Shiraishi&newwindow=1&sxsrf=ALeKk02zAwMGnlVRa5C9V-mhpmqr6uehGQ:1600865465545&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiYs6DLqP_rAhXQX8AKHS4eAxQQ_AUoAXoECBsQAw&biw=1536&bih=722#imgrc=TNm9WE6Tmu0k_M"
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
}
</style>
