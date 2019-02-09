import Vue from 'vue';
import App from './App';
import router from './router';

import PageHeader from '@/components/shared/PageHeader';
import PageFooter from '@/components/shared/PageFooter';
import InnerItem from '@/components/shared/InnerItem';
import SoundCloudPlayer from '@/components/shared/SoundCloudPlayer';
import YouTubeVideo from '@/components/shared/YouTubeVideo';

Vue.config.productionTip = false;

Vue.component('page-header', PageHeader);
Vue.component('page-footer', PageFooter);
Vue.component('inner-item', InnerItem);
Vue.component('sound-cloud-player', SoundCloudPlayer);
Vue.component('youtube-video', YouTubeVideo);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
