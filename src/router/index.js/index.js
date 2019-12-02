import Vue from 'vue'
import Router from 'vue-router'


import ScreeningHall from "../../components/ScreeningHall.vue"

Vue.use(Router)

const routes = [{
    path: '/',
    name: '',
    meta: {
        requireAuth: true,
    },
    component: ScreeningHall
}]

export const router = new Router({
    mode: 'hash',
    routes
})