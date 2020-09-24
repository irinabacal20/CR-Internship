<template>
  <div id="show-episode-card">
    <img :src="`${episodeImage}`" alt="Episode Image">
    <router-link to="/show_episode">
      <p id="episode-number">Episode {{episodeNumber}}</p>
    </router-link>
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
  box-shadow: var(--box-shadow);
  font-size: 15px;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

#show-episode-card > img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  object-position: top;
}

#episode-number,
#show-episode-card > p {
  padding: 5px;
  text-decoration: none;
  font-family: var(--general-font);
  color: var(--third-color);
}

#episode-number {
  font-weight: bold;
  font-size: 20px;
}
</style>
