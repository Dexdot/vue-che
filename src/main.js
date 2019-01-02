import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App.vue';
import router from './router/';
import store from './store/';
import firebase from './firebase';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDBeA6UtLmU-70BTPXxDu94R8Zo9nxYzzk',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
});

// 3rd-party components
import { Input } from 'element-ui';
import ElementLoading from 'vue-element-loading';

// Styles
import './main.sass';
import 'element-ui/lib/theme-chalk/index.css';

// Element
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
