<template>
  <footer id="footer">
    <div id="footer-content-container">
      <div id="social-media">
        <a href="https://www.facebook.com/bacal.irina" target="_bank">
          <img
            src="../assets/facebook.png"
            alt="Facebook Logo"
            width="35px"
            height="35px"
          />
        </a>
        <a href="https://www.instagram.com/irinabacal/" target="_bank">
          <img
            src="../assets/instagram.png"
            alt="Instagram Logo"
            width="35px"
            height="35px"
          />
        </a>
        <a href="https://twitter.com/ireneB_Md" target="_bank">
          <img
            src="../assets/twitter.png"
            alt="Twitter Logo"
            width="35px"
            height="35px"
          />
        </a>
      </div>
      <span id="propertyOf">&#169; 2020 Bacal Irina</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style>
#footer {
  background: var(--third-color);
}
#footer-content-container {
  margin-left: var(--margin-left);
  margin-right: var(--margin-right);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
#footer-content-container>span{
  font-family: var(--general-font);
  font-size: 14px;
  color: var(--first-color);
  text-align: center;
  padding-bottom: 15px;
}
#social-media {
  padding-top: 20px;
  display: flex;
  justify-content: center;
}
#social-media >a>img {
  padding: 0 20px;
  filter: drop-shadow(0 0 0.25rem black);
}
#social-media > a>img:hover {
  filter: drop-shadow(0 0 0.25rem var(--second-color));
}

#propertyOf{
  padding:15px;
}

@media screen and (max-width: 900px){
  #footer-content-container {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
}

  #footer-text{
    display: grid;
  }
}

</style>


