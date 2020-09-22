<template>
  <div id="show-episode-collection">
    <ShowEpisodeCard
      episodeImage="https://i.ytimg.com/vi/f-SUprXyYYk/maxresdefault.jpg"
      episodeNumber="1"
      episodeTitle="Pilot Episode"
    />
    <ShowEpisodeCard
      episodeImage="https://i.ytimg.com/vi/f-SUprXyYYk/maxresdefault.jpg"
      episodeNumber="1"
      episodeTitle="Pilot Episode"
    />
    <ShowEpisodeCard
      episodeImage="https://i.ytimg.com/vi/f-SUprXyYYk/maxresdefault.jpg"
      episodeNumber="1"
      episodeTitle="Pilot Episode"
    />
    <ShowEpisodeCard
      episodeImage="https://i.ytimg.com/vi/f-SUprXyYYk/maxresdefault.jpg"
      episodeNumber="1"
      episodeTitle="Pilot Episode"
    />
    <ShowEpisodeCard
      episodeImage="https://i.ytimg.com/vi/f-SUprXyYYk/maxresdefault.jpg"
      episodeNumber="1"
      episodeTitle="Pilot Episode"
    />
  </div>
</template>

<script>
import ShowEpisodeCard from "./ShowEpisodeCard.vue";

export default {
  name: "ShowEpisodeCollection",
  components: {
    ShowEpisodeCard
  }
};
</script>

<style>
#show-episode-collection {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
  margin: auto;
  grid-gap: 20px;
}

@media screen and (max-width: 900px) {
  #show-episode-collection {
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
    grid-gap: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
