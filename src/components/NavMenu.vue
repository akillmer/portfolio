<template>
  <div id="nav" ref="nav" :class="{ expand: isExpanded }">
    <div :class="{'touch-tab': !isExpanded}" @click="toggleMenu"></div>
    <div :class="{ overlay: isExpanded }" ref="overlay" @click="toggleMenu"></div>
    <ul>
      <router-link :style="boxShadowStyle" to="/" alt="Home">
        <li @click="hideMenu">
          <i class="fas fa-home"></i>
        </li>
      </router-link>
      <router-link :style="boxShadowStyle" to="/skills" alt="Skills">
        <li @click="hideMenu">
          <i class="fas fa-pencil-ruler"></i>
        </li>
      </router-link>
      <router-link :style="boxShadowStyle" to="/work" alt="Work">
        <li @click="hideMenu">
          <i class="fas fa-folder"></i>
        </li>
      </router-link>
      <router-link :style="boxShadowStyle" to="/about" alt="About">
        <li @click="hideMenu">
          <i class="fas fa-user-circle"></i>
        </li>
      </router-link>
      <router-link :style="boxShadowStyle" to="/contact" alt="Contact">
        <li @click="hideMenu">
          <i class="fas fa-comment-alt"></i>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

.expand {
  left: -24px !important;
}

.overlay {
  position: absolute;
  width: 100vh;
  height: 100vh;
  top: 50%;
  transform: translateY(-50%);
}

.touch-tab {
  visibility: hidden;
  position: absolute;
  height: 100%;
  width: 20px;
  top: 0;
  right: 0;

  @media #{$portrait} {
    visibility: visible;
  }
}

#nav {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;

  @media #{$windowed} {
    font-size: 0.8em;
    li {
      margin-bottom: 2em;
    }
  }

  @media #{$landscape} {
    font-size: 0.65em;
    padding-top: 1em;
  }

  @media #{$portrait} {
    background-color: rgb(126, 107, 80, 0.3);
    backdrop-filter: blur(2px);
    padding: 1.5em 2em 0 0.5em;
    border-radius: 0 10px 10px 0;
    border: solid 1px rgba(0, 0, 0, 0.1);
    left: -90px;
    transition: all 0.5s ease-in-out;

    a {
      padding: 0.25em;
      border: solid 1px rgba(0, 0, 0, 0.3) !important;
      margin-bottom: 2em !important;
      box-shadow: none !important;
    }
  }

  // with a short view port the nav needs to be adjusted to remain in the center
  @media screen and (max-height: 420px) {
    padding-top: 1em;
  }

  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }

  i {
    font-size: 1.5em;
    margin-left: 50%;
    margin-top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  a {
    color: #4b6675;
    display: block;
    width: 3em;
    height: 3em;
    background-color: #d9e8f5;
    margin-bottom: 1em;
    border-radius: 2px;

    font-weight: bold;
    border-bottom: none;
    text-shadow: none;

    transition: color 0.8s ease-in-out;

    &.router-link-exact-active {
      color: #f26101;
    }
  }
}
</style>

<script>
import BoxShadow from "@/BoxShadow";

export default {
  name: "NavMenu",
  data() {
    return {
      isExpanded: false
    };
  },
  mounted() {
    this.$refs.overlay.addEventListener("touchstart", this.hideMenu);
  },
  computed: {
    boxShadowStyle() {
      return BoxShadow("#91BED4", 10);
    }
  },
  methods: {
    toggleMenu() {
      let bounds = this.$refs.nav.getBoundingClientRect();
      this.isExpanded = !this.isExpanded && bounds.x < -24;
      // when expanded (left: -24px)
    },
    hideMenu() {
      this.isExpanded = false;
    }
  }
};
</script>
