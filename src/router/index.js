import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import zero from '../views/zero.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: () => import( '../views/Sign in.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Sign up.vue')
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/zero',
    name: 'zero',
    component: zero
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
