import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
})

Vue.use(VueFirestore)

//? For currency
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

import store from './store.js';

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Login', require('./components/Login.vue').default);
Vue.component('AddToCart', require('./components/AddToCart.vue').default);
Vue.component('MiniCart', require('./components/MiniCart.vue').default);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user) {
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});