import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HundredQuestions from '../views/HundredQuestions.vue'
import Performer from '../views/Performer.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/performer',
  name: 'performer',
  component: Performer
}, {
  path: '/hundredquestions',
  name: 'hundredquestions',
  component: HundredQuestions
}]

const router = new VueRouter({
  mode: "hash",
  routes
})

export default router