<template>
  <div class="container" :style="bgColor + boxShadow + expandedStyle">
    <div
      :class="{ content: true, fade: showContent, 'white-theme': (accent === 'white') }"
      :ref="contentRef"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/media.scss";

.container {
  position: relative;
  visibility: hidden;
  overflow: hidden;
  height: 1px;
  padding: 0 36px 0 36px; // bottom value gets added to margin-bottom on exit animation
  border-radius: 4px;
  transition: all 1s ease-in-out; // animated height and paddings
  margin-bottom: 54px; // gets added to computed height value on exit animation

  @media #{$landscape} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    transition: none;
  }

  @media #{$portrait} {
    border-radius: 0;
    box-shadow: none !important; // override style
    border-bottom: solid 20px; // color is set via computed boxShadow per accent color
    transition: none;
  }

  .content {
    position: relative;
    z-index: 1;
    line-height: 2em;
    padding-bottom: 1em;
  }

  a {
    color: #ffffff;
    text-shadow: 1px 1px #c08020;
  }

  p {
    text-align: justify;
  }

  .white-theme {
    a {
      color: #c96610;
      text-shadow: none;
    }
  }

  h1 {
    display: inline-block;
    color: #fafafa;
    text-shadow: 2px 2px #e69a2a;
    margin-bottom: 0;

    @media #{$portrait} {
      text-align: center;
    }
  }

  h2 {
    color: rgba(63, 63, 63, 0.9);
    padding-bottom: 0.5em;
    border-bottom: solid 1px rgba(63, 63, 63, 0.2);
    margin-bottom: 0;

    i {
      float: right;
      font-size: 1.4em;
      color: #333;
      opacity: 0.2;
    }
  }
}
</style>

<script>
import Reveal from "@/mixins/Reveal";
import BoxShadow from "@/BoxShadow";

export default {
  name: "Content",
  mixins: [Reveal],
  props: {
    sequence: Number,
    accent: {
      type: String,
      default: "orange",
      validator(value) {
        return ["orange", "white"].indexOf(value) !== -1;
      }
    }
  },
  updated() {
    // make sure the DOM is ready to capture the component's full height,
    // listening to window load events wont work since that only happens once with an app.
    // and setting up from mounted() won't work since the DOM isn't fully updated yet.
    if (!this.loaded) {
      window.addEventListener("resize", this.updateBoxSizes);
      window.setTimeout(() => {
        this.showContent = true;
        this.updateBoxSizes();
      }, this.sequence * 1250);
      this.loaded = true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateBoxSizes);
  },
  data() {
    return {
      loaded: false,
      showContent: false,
      height: 1,
      contentRef: `${this._uid}_content`
    };
  },
  computed: {
    expandedStyle() {
      if (this.isRevealed && this.showContent)
        // enter animation state
        return `visibility: visible;
          height: ${this.height}px;
          padding-top: 18px; 
          padding-bottom: 18px;`;
      else if (!this.isRevealed && this.showContent) {
        // exit animation state
        return `margin-bottom: ${this.height +
          /* padding: */ 36 +
          /* margin: */ 54}px`;
      }

      return "";
    },
    bgColor() {
      let color = this.accent === "orange" ? "#f8cf82;" : "#fff";
      return `background-color: ${color};`;
    },
    boxShadow() {
      let orangeColor = "#e69a2a";
      let whiteColor = "#d9e8f5";
      // this also sets the border color because its used on mobile instead of box shadow
      return this.accent === "orange"
        ? `border-color: ${orangeColor}; ${BoxShadow(orangeColor, 20)}`
        : `border-color: ${whiteColor}; ${BoxShadow(whiteColor, 20)}`;
    }
  },
  methods: {
    updateBoxSizes() {
      this.height = this.$refs[this.contentRef].clientHeight;
    }
  }
};
</script>
