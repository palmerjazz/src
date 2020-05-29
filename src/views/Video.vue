<template>
  <div>
    <InnerItem title="YouTube">
      <p><i>For my <a :href="videoPortfolioLink">video portfolio</a>, visit my YouTube page!</i></p>
    </InnerItem>

    <InnerItem title="Videos">
      <YouTubeVideo v-for="video in youtubeVideos" :key="video.videoId" v-bind="video" width="420" height="315"/>
    </InnerItem>
  </div>
</template>

<script>
import InnerItem from '@/components/common/InnerItem';
import YouTubeVideo from '@/components/media/YouTubeVideo';

export default {
  components: {
    InnerItem,
    YouTubeVideo,
  },
  data() {
    return {
      videoPortfolioLink: 'https://www.youtube.com/user/AndrewPalmerJazz',
      youtubeVideos: [
        {
          videoId: '9M-LMlzkDmA',
          caption: '"All About Love" as performed by Natalie Cole, transcribed for Rocket City Jazz Orchestra',
        },
        {
          videoId: 'bZ1oywAClqU',
          caption: 'A transcription of "Destination Moon" I did for Rocket City Jazz Orchestra',
        },
        {
          videoId: 'imKu9evAIv8',
          caption: 'My arrangement of a tune by guitarist Bob Valentine arranged for big band',
        },
      ],
    };
  },
};
</script>
