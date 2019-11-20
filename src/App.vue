<template>
  <div>
    <div id="app">
      <NavMenu />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

html {
  overflow-y: scroll;
}

body {
  background-image: url("./assets/background.png");
  font-family: "Public Sans", sans-serif;
  font-size: 1.3em;
  color: #524328;
  margin: 0;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em 0 1em;

  @media #{$windowed} {
    padding-left: 6em;
  }

  @media #{$landscape} {
    padding-right: 0;
  }

  @media #{$portrait} {
    padding-left: 0;
  }
}

a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px dashed black;
  text-shadow: 1px 1px black;
}

// don't style linked icons
a i {
  color: none;
  text-decoration: none;
  border-bottom: none;
  text-shadow: none;
}
</style>

<script>
import NavMenu from "@/components/NavMenu";

export default {
  name: "App",
  components: { NavMenu }
};
</script>
