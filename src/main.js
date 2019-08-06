import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant的组件
import Vant from './vant/index'
Vant()
import 'vant/lib/index.css';

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')