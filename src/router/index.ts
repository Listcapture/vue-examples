import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { createGlobalState } from '@vueuse/core'
import type { Order, Shop } from '../views/Exp03/data/homework02'
import { ref } from 'vue'
import LoginView from '../views/Project/LoginView.vue';
import MainPage from '../views/Project/MainPage.vue';
import personalView from '../views/Project/PersonalView.vue'
import CoursesView from '../views/Project/CoursesView.vue';
import BookRoomVIew from '../views/Project/bookRoomView.vue';

const routes:Array<RouteRecordRaw>=[
    {
      path: '/index',
      component: LoginView // 创建名为 
    },
    {
      path:'/mainpage',
      component:MainPage,
      children:[
         {
          path:'personal',
          component:personalView
         },
         {
          path:'courses',
          component:CoursesView
         },
         {
          path:'bookRoom',
          component:BookRoomVIew
         }
      ]
    },
    // 添加其他路由
  ];
   
  
const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: routes
})


export default router
