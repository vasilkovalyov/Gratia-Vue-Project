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
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/Menu.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
