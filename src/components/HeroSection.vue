<template>
  <div id="container">
    <section id="hero-section">
      <img :src="`${hero.image}`" alt="Today`s Pick">
      <div id="showInfo">
        <p>#trending</p>
        <h1>{{hero.title}}</h1>
        <p id="hero-description">{{hero.description}}...</p>
        <router-link :to="'/showpage/'+ hero.slug">WATCH</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  created: function() {
    this.$store.dispatch("fetchHero");
  },
  computed: {
    hero: function() {
      return this.$store.state.home.hero;
    }
  }
};
</script>

<style>
#container {
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 450px;
  background-size: cover;
  width: 100%;
  font-family: var(--general-font);
  color: var(--first-color);
}

#hero-section > img {
  position: absolute;
  z-index: -1;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  height: 450px;
  object-fit: cover;
  object-position: top;
  width: 100%;
}

#showInfo {
  display: flex;
  flex-direction: column;
  margin-right: var(--margin-right);
  margin-left: var(--margin-left);
  padding-top: 100px;
  text-align: justify;
}

#showInfo > h1 {
  font-size: var(--showTitle-font-size);
  margin-bottom: 20px;
  filter: var(--showHeader-text-shadow);
}

#showInfo > p {
  margin-bottom: 20px;
  font-size: var(--showDescription-font-size);
  filter: var(--showHeader-text-shadow);
}

#showInfo > a {
  width: 5%;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  box-shadow: -1px 3px 15px -5px var(--first-color);
  font-weight: bold;
  background: var(--third-color);
  color: var(--first-color);
  display: block;
  text-align: center;
  padding: 10px;
}

#showInfo > a:hover {
  background: var(--button-hover);
  border: -1px 3px 15px -5px var(--button-hover);
}

#hero-description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 900px) {
  #showInfo > p {
    font-size: 15px;
  }

  #showInfo > a {
    width: 60px;
    text-align: center;
  }

  #showInfo > h1 {
    font-size: 40px;
  }

  #showInfo {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
