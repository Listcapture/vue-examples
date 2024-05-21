<script setup lang="ts">
import { createRouter, createWebHistory, RouteRecordRaw, useRouter } from 'vue-router';
import LoginView from './Project/LoginView.vue';
import MainPage from './Project/MainPage.vue';

const router = useRouter();
router.push('/index');
// // 路由配置
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/index',
//     component: LoginView
//   },
//   {
//     path: '/mainpage',
//     component: MainPage
//   }
//   // 添加其他路由
// ];

// // 创建路由实例
// const myRouter = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: routes
// });

// 自动跳转到 /index

</script>

<template>
  
  <router-view style="border-radius:5%;"></router-view>
</template>