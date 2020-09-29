<template>
  <div id="browse-card">
    <router-link to="/showpage">
      <div id="browse-card-image">
        <img :src="`${browseCardImage}`" alt="Browse Card Image" />
      </div>
      <div id="show-title">{{ showTitle }}</div>
      <div id="show-review">{{ showReview }}/100</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  props: {
    browseCardImage: String,
    showTitle: String,
    showReview: String,
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
  box-shadow: -1px 3px 15px -5px var(--second-color);
}

#browse-card-image > img {
  width: 100%;
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

a {
  text-decoration: none;
}
</style>
