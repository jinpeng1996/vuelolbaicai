import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Joyou from './views/Joyou.vue'
import Collection from './views/Collection.vue'
import My from './views/My.vue'
import HomeNav from './views/HomeNav.vue'

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
      path: '/homeNav',
      name: 'homeNav',
      component: HomeNav
    }
  ]
})