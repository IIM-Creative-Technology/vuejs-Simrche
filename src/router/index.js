import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  //{
    //path: '/',
   // name: 'Home',
   // component: Home
 // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/',
    name:'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/newpage',
    name: 'NewPage',
    component: () => import('../views/NewPage')

  },
  // {
  //   path: '/article',
  //   name: 'Article',
  //   component: () => import('../views/BlogIndex.vue'),
  // },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Sign.vue')

  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Log.vue')

  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')

  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue')

  },
]

const router = new VueRouter({
  routes
})

export default router
