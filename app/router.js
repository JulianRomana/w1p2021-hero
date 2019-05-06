import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Where from './components/Where.vue';
import Wait from './components/Wait.vue';
import Chill from './components/Chill.vue';
import Dangerous from './components/Dangerous.vue';
import Dead from './components/Dead.vue';
import End from './components/End.vue';

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
      path: '/where',
      name: 'where',
      component: Where
    },
    {
      path: '/chill',
      name: 'chill',
      component: Chill
    },
    {
      path: '/dangerous',
      name: 'dangerous',
      component: Dangerous
    },
    {
      path: '/dead',
      name: 'dead',
      component: Dead
    },
    {
      path: '/end',
      name: 'end',
      component: End
    },
    {
      path: '*',
      name: 'home',
      component: Wait
    }
  ]
});

export default router;
