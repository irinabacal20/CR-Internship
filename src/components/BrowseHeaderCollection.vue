<template>
  <div id="browse-header-collection">
    <div id="category-name">{{categoryName}}</div>
    <router-link :to="category" id="see-more">
      <button>See more &gt;</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BrowseHeaderCollection",
  props: {
    categoryName: String,
    category: String
  }
};
</script>

<style>
#browse-header-collection {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: var(--first-color);
  font-family: var(--general-font);
  font-size: var(--menu-option-font-size);
  box-shadow: var(--box-shadow);
  color: var(--third-color);
}

#browse-header-collection > a > button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--general-font);
  font-size: var(--menu-option-font-size);
  color: var(--third-color);
}

#browse-header-collection > a {
  margin-top: auto;
  margin-bottom: auto;
}
#browse-header-collection > a > button:hover {
  color: var(--second-color);
}

#category-name {
  margin-top: auto;
  margin-bottom: auto;
  font-weight: bold;
  margin-left: 10px;
}

@media screen and (max-width: 900px) {
  #browse-header-collection {
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 480px) {
  #browse-header-collection {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
