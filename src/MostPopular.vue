<template>
  <div id="most-popular">
    <CategoryCardCollection categoryName="Most Popular"/>
  </div>
</template>

<script>
import CategoryCardCollection from "./components/CategoryCardCollection.vue";
export default {
  name: "MostPopular",
  components: {
    CategoryCardCollection
  }
};
</script>

<style>
</style>
