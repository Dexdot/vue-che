import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { Input } from 'element-ui';

import './main.sass';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component(Input.name, Input);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
