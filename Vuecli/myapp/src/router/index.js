import Vue from 'vue'
import VueRouter from 'vue-router'
import TvPlay from '../views/tvplay/TvPlay.vue'//预加载

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TvPlay',
    component: TvPlay
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/music/Music.vue')//懒加载
  },
  {
    path: '/book',
    name: 'Book',
    component: () => import('../views/book/Book.vue')
  },
  {
    path: '/talk',
    name: 'Talk',
    component: () => import('../views/talk/Talk.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router