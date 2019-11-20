<template>
  <div class="container" :style="bgColor + boxShadow + expandedStyle">
    <div :class="{ content: true, fade: showContent }" :ref="contentRef">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/media.scss";

.container {
  visibility: hidden;
  overflow: hidden;
  height: 1px;
  padding: 0 2em 0 2em;
  border-radius: 4px;
  transition: all 1s ease-in-out; // animated height and paddings
  margin-bottom: 3em;

  @media #{$landscape} {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media #{$portrait} {
    border-radius: 0;
    box-shadow: none !important; // override style
    border-bottom: solid 20px; // color is set via computed boxShadow per accent color
  }

  .content {
    line-height: 2em;
    text-align: justify;
  }

  h1 {
    display: inline-block;
    color: #fafafa;
    text-shadow: 2px 2px #e69a2a;
    text-align: center;
    border-bottom: dashed 2px #b99249;
    padding-bottom: 0.5em;
    margin-bottom: 0;
  }

  h2 {
    color: rgb(63, 63, 63);
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
      return this.isRevealed && this.showContent
        ? `visibility: visible;
          height: ${this.height}px;
          padding-top: 1em; 
          padding-bottom: 1em;`
        : "";
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
      this.height = this.$refs[this.contentRef].scrollHeight + 10;
    }
  }
};
</script>
