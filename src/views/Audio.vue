<template>
  <div>
    <inner-item title="Jazz Big Band Audio">
      <SoundCloudPlayer v-for="track in tracks" :key="track.trackId" v-bind="track"/>
    </inner-item>
  </div>
</template>

<script>
import SoundCloudPlayer from '@/components/media/SoundCloudPlayer';

export default {
  components: {
    SoundCloudPlayer,
  },
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
