import Vue from 'vue'
import App from './App.vue'


import jQuery from 'jquery'
global.jQuery = jQuery;
let Bootstrap = require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.css'

//Vue.use(Bootstrap);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
