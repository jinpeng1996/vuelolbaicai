import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Joyou from './views/Joyou.vue'
import Collection from './views/Collection.vue'
import My from './views/My.vue'
import HomeNav from './views/HomeNav.vue'
import Dl from './views/Dl.vue'
import Zc from './views/Zc.vue'
import Details from './views/Details.vue'
import Cartt from './views/cartt.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/joyou',
    name: 'joyou',
    component: Joyou
  }, {
    path: '/collection',
    name: 'collection',
    component: Collection
  }, {
    path: '/my',
    name: 'my',
    component: My
  }, {
    path: '/homenav',
    name: 'homenav',
    component: HomeNav
  }, {
    path: '/dl',
    name: 'dl',
    component: Dl
  }, {
    path: '/zc',
    name: 'zc',
    component: Zc
  }, {
    path: '/details/:id',
    name: 'details',
    component: Details
  }, {
    path: '/cartt',
    name: 'cartt',
    component: Cartt
  }
  ]
})