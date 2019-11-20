<template>
  <div id="nav" ref="nav" @click="showMenu" :class="{ expand: isExpanded }">
    <div :class="{ overlay: isExpanded }" ref="overlay"></div>
    <ul>
      <li>
        <router-link :style="boxShadowStyle" to="/" alt="Home">
          <i class="fas fa-home"></i>
        </router-link>
      </li>
      <li>
        <router-link :style="boxShadowStyle" to="/skills" alt="Skills">
          <i class="fas fa-pencil-ruler"></i>
        </router-link>
      </li>
      <li>
        <router-link :style="boxShadowStyle" to="/work" alt="Work">
          <i class="fas fa-folder"></i>
        </router-link>
      </li>
      <li>
        <router-link :style="boxShadowStyle" to="/about" alt="About">
          <i class="fas fa-user-circle"></i>
        </router-link>
      </li>
      <li>
        <router-link :style="boxShadowStyle" to="/contact" alt="Contact">
          <i class="fas fa-comment-alt"></i>
        </router-link>
      </li>
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
    background-color: #fafafa;
    padding-right: 2em;
    border-radius: 0 10px 10px 0;
    left: -92px;
    transition: all 0.5s ease-in-out;
  }

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
    showMenu() {
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
