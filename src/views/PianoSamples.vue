<template>
  <div>
    <inner-item title="Piano Samples">
      <SoundCloudPlayer width="100%" height="450" playlist-id="73340841" :options="{
        auto_play: false,
        hide_related: true,
        show_comments: false,
        show_user: true,
        show_reposts: false,
        visual: false,
        show_artwork: true
      }"/>
    </inner-item>
    <inner-item>
      <div>SoundCloud profile:</div>
      <div><a href="https://soundcloud.com/palmerjazz">Jazz Piano by Andrew Palmer</a></div>
    </inner-item>
  </div>
</template>

<script>
import SoundCloudPlayer from '@/components/media/SoundCloudPlayer';

export default {
  components: {
    SoundCloudPlayer,
  },
};
</script>
