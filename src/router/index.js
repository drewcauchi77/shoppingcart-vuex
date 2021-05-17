import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../components/views/HomePage'
import AboutPage from '../components/views/AboutPage'
import CartPage from '../components/views/CartPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router