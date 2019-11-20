<template>
  <div class="drop-title">
    <div class="placeholder">
      <img :src="img" :alt="alt" :class="{ show: isRevealed }" />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/media.scss";

.drop-title {
  overflow: hidden;
  margin: 4em 0 -5em 0;
  text-align: center;

  @media #{$landscape} {
    padding: 1em;
  }

  img {
    transition: opacity 1s ease-in-out;
    width: 100%;
    min-width: 300px;
    max-width: 800px;
    opacity: 0;
  }

  .show {
    opacity: 1;
  }
}
</style>

<script>
import Reveal from "@/mixins/Reveal";

export default {
  name: "DropTitle",
  mixins: [Reveal],
  props: {
    img: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
};
</script>
