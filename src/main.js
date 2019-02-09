import Vue from 'vue';
import App from './App';
import router from './router';

import PageHeader from '@/components/shared/PageHeader';
import PageFooter from '@/components/shared/PageFooter';

Vue.config.productionTip = false;

Vue.component('page-header', PageHeader);
Vue.component('page-footer', PageFooter);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
