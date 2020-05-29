<template>
  <div>
    <InnerItem title="Jazz Big Band Audio">
      <SoundCloudPlayer v-for="track in tracks" :key="track.trackId" v-bind="track"/>
    </InnerItem>
  </div>
</template>

<script>
import InnerItem from '@/components/common/InnerItem';
import SoundCloudPlayer from '@/components/media/SoundCloudPlayer';

export default {
  components: {
    InnerItem,
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
