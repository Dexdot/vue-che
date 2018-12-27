import Vue from 'vue';

import App from './App.vue';
import router from './router/';
import store from './store/';
import firebase from './firebase';

import { Input } from 'element-ui';
import ElementLoading from 'vue-element-loading';

import './main.sass';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component(Input.name, Input);
Vue.component('ElementLoading', ElementLoading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase(this);
  }
}).$mount('#app');
