<template>
  <div>
    <iframe scrolling="no" frameborder="no" v-bind="iframeBindings"/>
    <br /><br />
  </div>
</template>

<script>
const DEFAULT_OPTIONS = {
  color: 'ff0000',
  auto_play: false,
  show_artwork: false,
};

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
    options: {
      type: Object,
      required: false,
    },
  },
  computed: {
    queryUrl() {
      return this.playlistId
        ? `https://api.soundcloud.com/playlists/${this.playlistId}`
        : `https://api.soundcloud.com/tracks/${this.trackId}`;
    },
    iframeBindings() {
      const qs = new URLSearchParams(Object.assign(
        { url: this.queryUrl },
        DEFAULT_OPTIONS,
        this.options
      ));
      return {
        width: this.width,
        height: this.height,
        src: `https://w.soundcloud.com/player/?${qs.toString()}`,
      };
    },
  },
};
</script>
