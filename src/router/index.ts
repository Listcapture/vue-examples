import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes:Array<RouteRecordRaw>=[
   {
      path:'/example01',
      component:()=>import('@/views/examp01/example01View.vue')
   },
   {
      path:'/example02',
      component:()=>import('@/views/examp01/example02View.vue')
   },
    {
      path:'/example03',
      component:()=>import('@/views/examp01/example01View.vue')
   },
   {
      path:'/example04',
      component:()=>import('@/views/examp01/example02View.vue')
   }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
