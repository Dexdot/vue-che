import Vue from 'vue';
import Vuex from 'vuex';

import catalog from './modules/catalog';
import common from './modules/common';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog,
    common,
    user
  }
});
