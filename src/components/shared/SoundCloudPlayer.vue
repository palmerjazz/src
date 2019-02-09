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
    },
    playlistId: {
      type: String,
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
    queryUrl() {
      return this.playlistId
        ? `https://api.soundcloud.com/playlists/${this.playlistId}`
        : `https://api.soundcloud.com/tracks/${this.trackId}`;
    },
    iframeBindings() {
      return {
        width: this.width,
        height: this.height,
        src: `https://w.soundcloud.com/player/?url=${encodeURI(this.queryUrl)}&color=ff0000&auto_play=false&show_artwork=false`,
      };
    },
  },
};
</script>
