import Vue from 'vue';
import router from './router';
import './assets/scss/styles.scss';

new Vue({ router: router }).$mount('#root');

import Phases from './assets/data/data.json';
console.log(Phases.phases.phase1);
