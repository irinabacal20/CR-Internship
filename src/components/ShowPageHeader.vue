<template>
  <div id="show-page-header">
    <iframe
      id="trailer-header"
      src="https://www.youtube.com/embed/CCfYQnOLHV0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ShowPageHeader"
};
</script>

<style>
#show-page-header {
  position: relative;
  height: 450px;
  background: var(--second-color);
}

#trailer-header {
  width: 100%;
  height: 450px;
}
</style>
