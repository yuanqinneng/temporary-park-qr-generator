import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: home
  },
  {
    path: '/myqr',
    name: 'myqr',
    component: () => import("@/views/qr.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
