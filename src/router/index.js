import Vue from 'vue'
import VueRouter from 'vue-router'
import Buy from '../Buy'
import Home from '../Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/buy',
    name: 'buy',
    component : Buy,
    props: {
    }
  },
  {
    path: '/',
    name: 'home',
    component : Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
