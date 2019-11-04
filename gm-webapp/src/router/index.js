import Vue from 'vue'
import home from '../views/home'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
      {path: '/', component: home},
  ]
})

export default router
