import Vue from 'vue';
import Router from 'vue-router';

import PageHome from '../components/PageHome.vue';
import PageProduct from '../components/PageProduct.vue';
import PagePersonal from '../components/PagePersonal.vue';
import Catalog from '../components/Catalog/Catalog.vue';

import AuthGuard from './auth-guard';

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
      component: Catalog
    },
    {
      path: '/catalog/:id',
      name: 'catalog',
      component: PageProduct
    },
    {
      path: '/personal',
      component: PagePersonal,
      beforeEnter: AuthGuard
    }
  ]
});
