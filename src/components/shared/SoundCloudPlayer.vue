<template>
  <div>
    <iframe scrolling="no" frameborder="no" v-bind="iframeBindings"/>
    <br /><br />
  </div>
</template>

<script>
export default {
  props: {
    trackId: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: false,
      default: '80%',
    },
    height: {
      type: String,
      required: false,
      default: '166',
    },
  },
  computed: {
    iframeBindings() {
      return {
        width: this.width,
        height: this.height,
        src: `https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F${this.trackId}&color=ff0000&auto_play=false&show_artwork=false`,
      }
    },
  },
};
</script>
