import Vue from 'vue';
import App from './App';
import router from './router';

import InnerItem from '@/components/shared/InnerItem';

Vue.config.productionTip = false;

Vue.component('inner-item', InnerItem);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
