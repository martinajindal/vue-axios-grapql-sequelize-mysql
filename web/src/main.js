import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource';

import App from './App.vue'
import routes from './router';
import store from './store';
import ApiService from './common/api.service'
import { API_URL } from './common/config'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, { errorBagName: 'vErrors' }); 

ApiService.init()

const router = new VueRouter({
mode: 'history', //to have nice url avoiding removing # from url
routes:  routes
// in ES6 we can use as below if both the lhs and rhs names are equal
// routes
});

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
Vue.http.options.root = API_URL
