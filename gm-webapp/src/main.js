import Vue from "vue"
import app from "./app"
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)


new Vue({
  el:"#app",
  router,
  render(h){
    return h(app)
  }
})
