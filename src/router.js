import Vue from 'vue';
import Router from 'vue-router';

import PageHome from './components/PageHome.vue';
import PageCatalog from './components/PageCatalog.vue';
import PageProduct from './components/PageProduct.vue';
import PagePersonal from './components/PagePersonal.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: PageHome
    },
    {
      path: '/catalog',
      component: PageCatalog
    },
    {
      path: '/catalog/:id',
      component: PageProduct
    },
    {
      path: '/personal',
      component: PagePersonal
    }
  ]
});
