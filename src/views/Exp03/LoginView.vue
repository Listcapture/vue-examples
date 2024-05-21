<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Login } from './service/authService';

let username = ref('admin');
let password = ref('admin');
let errorMessage = ref('');
const router = useRouter();

const handleLogin = async () => {
  // 清空之前可能存在的错误信息
  errorMessage.value = '';

  try {
    await Login(username.value, password.value);
    
    
  } catch (error) {
    errorMessage.value = '登录失败，请稍后重试';
    router.push({ name: '/Dashboard' });
  }
};
</script>

<template>
  <div>
    <input v-model="username" placeholder="用户名" />
    <input v-model="password" type="password" placeholder="密码" />
    <button @click="handleLogin"><a href="/login">登录</a></button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>