import Vue from 'vue'
import VueRouter from 'vue-router'
import Buy from '../Buy'
import Home from '../Home'
import Input from '../Input'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Buy',
    name: 'Buy',
    component : Buy
  },
  {
    path: '/',
    name: 'home',
    component : Home
  },
  {
    path: '/Input',
    name: 'Input',
    component : Input
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
