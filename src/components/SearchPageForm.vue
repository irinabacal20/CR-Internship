<template>
  <div id="search-page-form">
    <div id="input-field">
      <input type="text" placeholder="Search" v-model="search" name="search" />
      <button type="submit" @click="handleSearch">
        <img
          src="../assets/search_icon.png"
          alt="Search Icon"
          width="30px"
          height="30px"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPageForm",
  data() {
    return {
      search: "",
    };
  },
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

#input-field > button > img {
  filter: drop-shadow(0 0 3px black);
}

#input-field >button{
background:none;
border:none;
cursor:pointer;
}

#input-field > button > img:hover {
   filter: drop-shadow(0 0 3px var(--first-color));
}

#input-field > input {
  border: none;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  padding-left:20px;
}
</style>
