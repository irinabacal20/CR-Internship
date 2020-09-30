<template>
  <div id="updated-category">
    <CategoryCardCollection categoryName="Recently Updated" />

    <div id="updated-shows">
      <BrowseCard
        v-for="updatedShow in updatedCategory"
        :key="updatedShow.id"
        :browseCardImage="updatedShow.image"
        :showTitle="updatedShow.title"
        :showType="updatedShow.showType"
        :showId="updatedShow.id"
      />
    </div>

    <div v-if="isLoading" class="loading">Loading</div>
    <div id="button-box">
      <button @click="handleShowMore" class="button">Show More</button>
    </div>
  </div>
</template>

<script>
import CategoryCardCollection from "./components/CategoryCardCollection.vue";
import BrowseCard from "./components/BrowseCard.vue";

export default {
  name: "RecentlyUpdated",
  components: {
    CategoryCardCollection,
    BrowseCard,
  },
  created() {
    this.$store.dispatch("fetchRecentlyUpdatedPage");
  },
  computed: {
    updatedCategory: function () {
      return this.$store.state.categories.updatedtList;
    },
    isLoading: function () {
      return this.$store.state.categories.isRecentlyUpdatedLoading;
    },
  },
  methods: {
    handleShowMore: function () {
      this.$store.dispatch("fetchRecentlyUpdatedPage");
    },
  },
};
</script>

<style>
#updated-shows {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  margin: 15px;
}
#updated-category {
  background: var(--first-color);
  box-shadow: var(--box-shadow);
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  margin-top: 80px;
  margin-bottom: 80px;
}

.button {
  background: var(--third-color);
  border: none;
  padding: 10px;
  color: var(--first-color);
  border-radius: var(--button-border-radius);
  cursor: pointer;
  display: block;
  justify-content: center;
  font-family: var(--general-font);
}

.button:hover {
  background: var(--button-hover);
}

#button-box {
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
}
.loading {
  animation: flash 3s ease infinite;
  font-size: 25px;
  text-align: center;
}

@keyframes flash {
  from {
    color: var(--third-color);
  }
  to {
    color: white;
  }
}

@media screen and (max-width: 900px) {
  #updated-shows {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    margin: auto;
  }
  #updated-category {
    margin: auto;
  }
}

@media screen and (max-width: 480px) {
  #updated-shows {
    display: grid;
    grid-template-columns: 80%;
    grid-gap: 50px;
    display: block;
    margin: auto;
  }
  #updated-category {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
