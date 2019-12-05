<template>
  <p class="note">
    <i class="far fa-sticky-note"></i>
    <slot />
  </p>
</template>

<style lang="scss">
p.note {
  font-size: 0.9em;
  line-height: 1.5em;
  margin-top: 2em;
  color: #999;

  i {
    opacity: 0.5;
  }

  a {
    color: #333;
  }
}
</style>
