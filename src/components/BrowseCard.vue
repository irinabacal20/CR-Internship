<template>
  <div id="browse-card">
    <router-link :to="'showpage/' + showId">
      <div id="browse-card-image">
        <img :src="browseCardImage" alt="Browse Card Image" />
      </div>
      <div id="show-title">{{ showTitle }}</div>
      <div id="show-type">{{ showType }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  props: {
    browseCardImage: String,
    showTitle: String,
    showType: String,
    showId: String,
  },
};
</script>

<style>
#browse-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

#browse-card-image > img:hover {
  box-shadow: -1px 3px 15px black;
}

#browse-card-image > img {
  width: 100%;
  object-fit: cover;
  object-position: top;
  box-shadow: var(--box-shadow);
}

#show-title,
#show-type {
  text-align: left;
  font-family: var(--general-font);
  font-size: 15px;
  padding: 5px 0;
}

#show-title {
  font-weight: bold;
}

a {
  text-decoration: none;
}
</style>
