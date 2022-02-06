require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';

import router from './Routes/index'
import store from './Stores/index';
import App from './App.vue'

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
//   components: { App }
});
