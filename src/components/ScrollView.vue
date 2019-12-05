<template>
  <div class="scroll-view">
    <iframe :ref="id" width="100%" height="100%"></iframe>
  </div>
</template>

<style lang="scss">
.scroll-view {
  height: 500px;
  overflow: hidden;
  text-align: center;
  margin-top: 1em;

  iframe {
    border: 0;
    border-radius: 8px;
  }
}
</style>

<script>
export default {
  name: 'ScrollView',
  props: {
    img: String,
    width: String
  },
  mounted() {
    if (this.img !== undefined) {
      let frameDoc = this.$refs[this.id].contentWindow.document
      frameDoc.open()
      frameDoc.write(
        `<body style="margin:0"><img src="${this.img}" style="width:100%;"/></body>`
      )
      frameDoc.close()
    }
  },
  computed: {
    id() {
      return `${this._uid}_frame`
    }
  }
}
</script>
