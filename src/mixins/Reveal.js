export default {
  data() {
    return {
      isRevealed: false
    }
  },
  mounted() {
    // give the page a moment before starting the animations
    window.setTimeout(() => (this.isRevealed = true), 500)
    this.$root.$on('route-change', () => (this.isRevealed = false))
  }
}
