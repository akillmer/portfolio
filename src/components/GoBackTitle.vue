<template>
  <div class="go-back-title">
    <div :class="{ reveal: isRevealed }">
      <router-link :to="url">
        <img src="@/assets/back-arrow.svg" />
        <slot />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/media.scss';

.go-back-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  height: 1em;

  a {
    color: inherit;
    border: none;
  }

  img {
    margin-right: 0.25em;
    padding-bottom: 0.1em;
    width: 2em;
    vertical-align: middle;
  }

  div {
    transition: all 1s ease-in-out;
    position: absolute;
    top: 3em;
    opacity: 0;

    @media #{$portrait} {
      transition: none;
    }
  }

  .reveal {
    top: 2em;
    opacity: 1;
  }
}
</style>

<script>
import Reveal from '@/mixins/Reveal'

export default {
  name: 'GoBackTitle',
  mixins: [Reveal],
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>
