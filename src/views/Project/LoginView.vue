<template>
    <div class="login">
      <form @submit.prevent="login" class="box">
        <p class="table">用户登陆</p>
        <br>
        <input v-model="UserName" type="text" placeholder="账号" name="account">
        <input v-model="password" type="password" placeholder="密码" name="password">
        <br>
        <button type="submit" @click="login" class="log">
            登录
        </button>
      </form>
    </div>
    <h2>DefaultAccount:admin &nbsp; &nbsp; &nbsp; DefaultPassword:admin</h2>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  let UserName = ref('admin');
  let password = ref('admin');
  let errorMessage = ref('登录失败');
  const router = useRouter();
  
  const login = function() {
  if (UserName.value === 'admin' && password.value === 'admin') {
    console.info('success');
    const currentRoute=router.currentRoute.value;
    console.log(currentRoute.redirectedFrom);
    router.push('./mainpage')
  } else {
    console.error('登录失败');
    alert(errorMessage.value);
  }
}
  </script>
  
  <style>
   *{
      padding: 0;
      margin: 0;
      text-decoration: none;
   }
   body{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-image: url('./resources/img/background.png');
      background-size: cover;
   }
   .login{
      width: 550px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
          to right bottom,
          rgba(255,255,255,.7),
          rgba(255,255,255,.5),
          rgba(255,255,255,.4)
      );
      /* 使背景模糊化 */
      backdrop-filter: blur(10px);
      box-shadow: 0 0 20px #a29bfe;
      border-radius: 15px;
   }
   .table{
      font: 900 40px '';
      text-align: center;
      letter-spacing: 5px;
      color: #3d3d3d;
   }
   .box{
      overflow: hidden;
      display: flex;
      flex-direction: column;
   }
   .box input{
      width: 400px;
      height: 100%;
      margin-bottom: 20px;
      outline: none;
      border: 0;
      padding: 10px;
      background-color: transparent;
      border-bottom: 3px solid rgb(150, 150, 240);
      font: 900 16px '';
      border-radius: 3px;
   }
    .log{
      text-align: center;
      display: block;
      height: 51px;
      padding: 12px;
      font: 900 20px '';
      border-radius: 10px;
      margin-top: 20px;
      color: #fff;
      letter-spacing: 3px;
      background-image: linear-gradient(to left,
        #fd79a8,#a29bf6);
   }
  </style>
