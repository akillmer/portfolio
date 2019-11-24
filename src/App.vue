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
@import "@/vars.scss";

html {
  overflow-y: scroll;
}

body {
  background-image: url("./assets/background.png");
  background-attachment: fixed;
  font-family: $font;
  font-size: 1.1em;
  color: #524328;
  margin: 5em 0 8em 0;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2em 0 1em; // slightly offset because of box-shadow

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
  text-decoration: none;
  border-bottom: 1px dashed black;
  // colors determined by Content's accent color
}

// don't style linked icons
a i {
  color: none;
  text-decoration: none;
  border-bottom: none;
  text-shadow: none;
}

.two-columns {
  display: flex;
  justify-content: space-between;

  @media #{$windowed-narrow} {
    display: block;
  }

  img {
    margin-top: 1em;
    width: 100%;
    border-radius: 4px;
  }

  .left-col {
    flex-grow: 1;
    max-width: 50%;
    margin-right: 1em;

    @media #{$windowed-narrow} {
      max-width: 100%;
      margin-right: 0;
    }
  }

  .right-col {
    flex-grow: 1;
    margin-left: 1em;
    @media #{$windowed-narrow} {
      margin-left: 0;
    }
  }
}
</style>

<script>
import NavMenu from "@/components/NavMenu";

export default {
  name: "App",
  components: { NavMenu }
};
</script>
