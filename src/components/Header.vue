<template>
  <nav id="navbar">
    <div id="navbar-content-container">
      <div id="navbar-logo">
        <router-link to="/">
          <img src="../assets/logo.png" width="160px" height="30px" alt="Logo">
        </router-link>
      </div>
      <div id="navbar-nested-options">
        <router-link to="/most_popular" class="navbar-option">Most Popular</router-link>
        <router-link to="/newest" class="navbar-option">Newest</router-link>
        <router-link to="/recently_updated" class="navbar-option">Recently Updated</router-link>
        <router-link to="/search" class="search-icon">
          <img src="../assets/search_icon.png" alt="Search" width="26px" height="26px">
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style>
#navbar {
  background-color: var(--first-color);
  box-shadow: var(--box-shadow);
}

#navbar-content-container {
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 500px;
  grid-auto-rows: minmax(70px, auto);
}

#navbar-nested-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(30px, auto);
  grid-gap: 10px;
}

.navbar-option {
  font-size: var(--menu-option-font-size);
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px;
  text-decoration: none;
}

#navbar-nested-options > a:hover {
  border-bottom: 2px solid var(--second-color);
  color: var(--second-color);
}

#navbar-nested-options > a {
  font-family: var(--general-font);
  color: var(--text-color);
}

.search-icon {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px;
}

#navbar-logo {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 10px;
}
#navbar-logo:hover {
  filter: drop-shadow(0 0 0.25rem var(--second-color));
}

@media screen and (max-width: 900px) {
  #navbar-content-container {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    grid-auto-rows: minmax(70px, auto);
  }

  #navbar-nested-options {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(30px, auto);
    grid-gap: 10px;
  }

  #navbar-nested-options > a:hover {
    color: var(--second-color);
    border: none;
  }

  .search-icon img:hover {
    border: 1px solid var(--second-color);
    padding-right: 30px;
    padding-left: 30px;
    width: 30px;
    height: 30px;
  }
}
</style>
