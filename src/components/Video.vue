<template>
  <div>
    <inner-item title="YouTube">
      <p><i>For my <a :href="videoPortfolioLink">video portfolio</a>, visit my YouTube page!</i></p>
    </inner-item>

    <inner-item title="Videos">
      <youtube-video v-for="video in youtubeVideos" :key="video.videoId" v-bind="video" width="420" height="315"/>
    </inner-item>
  </div>
</template>

<script>
export default {
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
