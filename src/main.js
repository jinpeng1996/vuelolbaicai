import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入vant的组件
import Vant from './vant/index'
Vant()
import 'vant/lib/index.css';

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')