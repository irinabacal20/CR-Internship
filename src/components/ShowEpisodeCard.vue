<template>
  <div id="show-episode-card">
    <img :src="`${episodeImage}`" alt="Episode Image">
    <p id="episode-number">Episode {{episodeNumber}}</p>
    <p>{{episodeTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "ShowEpisodeCard",
  props: {
    episodeImage: String,
    episodeNumber: String,
    episodeTitle: String
  }
};
</script>

<style>
#show-episode-card {
  width: 280px;
  box-shadow: var(--box-shadow);
  font-family: var(--general-font);
  color: var(--third-color);
  font-size: 17px;
}

#show-episode-card > img {
  width: 280px;
  height: 200px;
  object-fit: cover;
  object-position: top;
}

#episode-number {
  font-weight: bold;
  font-size: 20px;
}
</style>
