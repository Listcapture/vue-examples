import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
const routes:Array<RouteRecordRaw>=[
   {
      path:'/example01',
      component:()=>import('@/views/examp01/example01View.vue')
   },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
