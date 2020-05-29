import Vue from 'vue';
import App from './App';
import router from './router';

import InnerItem from '@/components/shared/InnerItem';
import SoundCloudPlayer from '@/components/shared/SoundCloudPlayer';
import YouTubeVideo from '@/components/shared/YouTubeVideo';

Vue.config.productionTip = false;

Vue.component('inner-item', InnerItem);
Vue.component('sound-cloud-player', SoundCloudPlayer);
Vue.component('youtube-video', YouTubeVideo);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
