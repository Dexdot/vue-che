import Vue from 'vue';
import Vuex from 'vuex';

import catalog from './modules/catalog';
import cart from './modules/cart';
import common from './modules/common';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog,
    cart,
    common,
    user
  }
});
