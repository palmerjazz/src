import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';

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
      component: () => import('../views/Audio'),
    },
    {
      path: '/video',
      name: 'Video',
      component: () => import('../views/Video'),
    },
    {
      path: '/piano-samples',
      name: 'PianoSamples',
      component: () => import('../views/PianoSamples'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact'),
    },
  ],
});
