import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Volunteer from '../views/Volunteer.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/volunteer',
    name: 'Volunteer',
    component: Volunteer,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
