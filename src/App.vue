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
$shadowColor: #e69a2a;

html {
  overflow-y: scroll;
}

body {
  background-image: url("./assets/background.png");
  font-family: "Public Sans", sans-serif;
  font-size: 1.3em;
  color: #836f49;
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

h1 {
  color: #fafafa;
  text-shadow: 2px 2px $shadowColor;
  text-align: center;
  border-bottom: dashed 2px #b99249;
  padding-bottom: 0.5em;
  margin-bottom: 0;
  display: inline-block;
}

a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px dashed $shadowColor;
  text-shadow: 1px 1px $shadowColor;
}
</style>

<script>
import NavMenu from "@/components/NavMenu";

export default {
  name: "App",
  components: { NavMenu }
};
</script>
