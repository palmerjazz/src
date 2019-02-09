import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Audio from '@/components/Audio';
import Video from '@/components/Video';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
    },
    {
      path: '/video',
      name: 'Video',
      component: Video,
    },
    {
      path: '/piano-samples',
      name: 'PianoSamples',
      component: Home,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Home,
    },
  ],
});
