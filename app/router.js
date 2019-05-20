import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Characters from './components/Characters.vue';
import Win from './components/Win.vue';
import Loose from './components/Loose.vue';
import Game from './components/Game.vue';

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
      path: '/game/:id',
      name: 'game',
      component: Game
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/loose',
      name: 'loose',
      component: Loose
    },
    {
      path: '/win',
      name: 'win',
      component: Win
    }
  ]
});

export default router;
