import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: () => import('../views/MyPage.vue'),
    alias:'/gomypage',// 相当于起个别名
    beforeEnter: (to, from,next) => {//入口守卫
      console.log(to,from);//to-到哪去 from-从哪里 next-函数-如果获得执行权限-进入要去的页面
      next();
    }
  },
  {
    path: '/parentpage',
    name: 'ParentPage',
    component: () => import('../views/test_page/ParentPage.vue'),
    children:[
      {
        path:'/parentpage/child1/:username',
        name:'Child1',
        component: () => import('../views/test_page/ChildPage1.vue')
      },
      {
        path:'/parentpage/child2',
        name:'Child2',
        component: () => import('../views/test_page/ChildPage2.vue')
      }
    ]
  },
  {
    path:'/home',
    redirect:'/'// 重定向功能
  },
  {
    path:'/gochild1/:username',
    redirect:'/parentpage/child1/:username'
  },
  {
    path:'*',
    component:() => import('../views/test_page/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // history 需要后端进行特殊处理才能够打包上线 hash 则不需要
  base: process.env.BASE_URL,
  routes
})

export default router
