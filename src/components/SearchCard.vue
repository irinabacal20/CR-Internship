<template>
  <div id="search-card">
    <div id="search-card-contents">
      <img :src="`${searchCardImage}`" alt="Browse Card Image" />
      <div id="show-description">
        <p id="show-title">{{ showTitle }}</p>
        <p id="search-card-description">{{ showDescription }}...</p>
        <router-link :to="'showpage/' + showId" id="watch-button"
          >Watch</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    searchCardImage: String,
    showTitle: String,
    showDescription: String,
    showId: String,
  },
};
</script>

<style>
#search-card {
  background: var(--first-color);
  box-shadow: var(--box-shadow);
}

#search-card-contents > img {
  width: 150px;
  height: 66, 66%;
  object-fit: cover;
  object-position: top;
}

#search-card-contents {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  font-family: var(--general-font);
  color: var(--third-color);
  font-size: 15px;
  text-align: justify;
}

#show-description {
  margin-left: 20px;
}

#show-description > p,
#show-description > a > button {
  margin: 10px 20px;
}

#show-title {
  font-weight: bold;
  font-size: 18px;
}

#show-description > a > button {
  width: 80px;
  height: 30px;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  box-shadow: -1px 3px 15px -5px var(--first-color);
  font-weight: bold;
  background: var(--third-color);
  color: var(--first-color);
  cursor: pointer;
}

#show-description > a > button:hover {
  background: var(--button-hover);
  border: -1px 3px 15px -5px var(--button-hover);
}

#search-card-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}

#watch-button {
  text-decoration: none;
  padding: 8px;
  background: var(--third-color);
  color: var(--first-color);
  font-weight: bold;
  border-radius: var(--button-border-radius);
  margin: 20px;
  display: block;
  width: 50px;
  border: none;
}
#watch-button:hover {
  background: var(--button-hover);
}
@media screen and (max-width: 900px) {
  #search-card-contents {
    display: flex;
    flex-direction: column;
  }

  #search-card-contents > img {
    margin-left: auto;
    margin-right: auto;
  }

  #show-description {
    margin-left: auto;
    margin-right: auto;
  }

  #show-description > a > button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  #show-title,
  #show-rating {
    text-align: center;
  }
}
</style>
