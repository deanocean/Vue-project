// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import "bootstrap";

import App from './App'
import router from './router'
import './bus';
import currencyFilter from './filters/currency.js';
import dateFilter from './filters/date';

/* vee-validate */
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate';
import zh_TW from 'vee-validate/dist/locale/zh_TW.json';
localize('zh_TW',zh_TW);
extend('email', email)
extend('required', {
  ...required,
  message: '此為必填欄位'
});
/* vee-validate */

import $ from 'jquery';
// import 'jquery.ripples';

window.$ = $;

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
axios.defaults.withCredentials = true;

Vue.component('Loading', Loading);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})

router.beforeEach((to, from, next) => {
  // console.log(`to: ${to}, from: ${from}, next: ${next}`)
  console.log(`to: ${to}`)
  if(to.meta.requiresAuth){
    // console.log('這裡需要驗證')
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
    console.log(response.data)
    if(response.data.success){
        next() 
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})