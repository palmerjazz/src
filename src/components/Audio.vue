<template>
  <div>
    <inner-item title="Jazz Big Band Audio">
      <sound-cloud-player v-for="track in tracks" :key="track.trackId" v-bind="track"/>
    </inner-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tracks: [
        { trackId: '92026075' },
        { trackId: '92027548' },
      ],
    };
  },
};
</script>
