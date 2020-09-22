<template>
  <div id="container">
    <section id="hero-section">
      <img :src="`${coverImage}`" alt="Today`s Pick">
      <div id="showInfo">
        <h1>{{animeTitle}}</h1>
        <p>{{showDescription}}</p>
        <router-link to="/showpage">
          <button>Watch</button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  data() {
    return {
      coverImage: "https://miro.medium.com/max/3840/0*wY7PJ-bn5X6xcsRH.jpg",
      animeTitle: "Gibiate",
      showDescription:
        "The story takes place in Japan. The year is 2030 and Earth has been completely overrun by a viral disease named Gibia that turns infected people into various different monsters, based on their age, gender, and race. A samurai and a ninja from the early Edo period travel together through time and arrive in a ruined Japan to aid a professor working on a cure for the virus."
    };
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

#showInfo > a > button {
  width: 100px;
  height: 40px;
  border-radius: var(--button-border-radius);
  border: var(--button-border);
  box-shadow: -1px 3px 15px -5px var(--first-color);
  font-weight: bold;
  background: var(--third-color);
  color: var(--first-color);
  cursor: pointer;
}

#showInfo > a > button:hover {
  background: var(--button-hover);
  border: -1px 3px 15px -5px var(--button-hover);
}

@media screen and (max-width: 900px) {
  #showInfo > a > button {
    width: 90px;
    height: 35px;
  }

  #showInfo > p {
    font-size: 15px;
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
