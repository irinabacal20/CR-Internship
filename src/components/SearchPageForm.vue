<template>
  <div id="search-page-form">
    <div id="input-field">
      <input type="text" placeholder="Search">
      <router-link to="SeachPage">
        <img src="../assets/search_icon.png" alt="Search Icon" width="30px" height="30px">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPageForm"
};
</script>

<style>
#input-field {
  display: grid;
  grid-template-columns: 95% 30px;
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  padding-top: 15px;
}

#search-page-form {
  background: var(--second-color);
  height: 65px;
}

#input-field > a > img {
  filter: drop-shadow(0 0 3px black);
}

#input-field > a > img:hover {
   filter: drop-shadow(0 0 3px var(--first-color));
}

#input-field > input {
  border: none;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}
</style>
