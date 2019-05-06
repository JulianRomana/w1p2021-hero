import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import Wait from './components/Wait.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/page',
      name: 'page',
      component: Page
    },
    {
      path: '*',
      name: 'home',
      component: Wait
    }
  ]
});

export default router;
