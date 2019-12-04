import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/bs',
    name: 'Bs',
    component: () => import('../views/Bs.vue')
  }
]

const router = new VueRouter({
  // mode:"history",
  mode:"hash",
  routes
})

export default router