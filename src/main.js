import Vue from 'vue'

import App from './App.vue'

import Mui from './lib/mui/css/mui.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)


const vm = new Vue({
  el: '#app',
  render: c => c(App),


})
