<template>
  <div>
    <p v-if="caption">{{ caption }}</p>
    <iframe v-bind="iframeBindings" frameborder="0"/>
  </div>
</template>

<script>
export default {
  props: {
    caption: {
      type: String,
      required: false,
    },
    videoId: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
  },
  computed: {
    iframeBindings() {
      return {
        width: this.width,
        height: this.height,
        allowfullscreen: true,
        src: `https://www.youtube.com/embed/${this.videoId}`,
      };
    },
  },
};
</script>
