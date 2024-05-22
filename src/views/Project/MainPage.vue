<script setup>
import { useRouter } from 'vue-router';
import { Teacher, Wanbo } from './projectEntity';
import { reactive, ref } from 'vue';
const router = useRouter();
let userproxy=Wanbo;
let show=true;



const logout = () => {
  // 添加退出逻辑
  router.push('/index');
  show=false;
};

const navigate = (destination) => {
  // 根据导航栏点击导航到相应组件
  router.push('/mainpage'+destination);
 show=false;
};
</script>

<template>
  <div>
    <header>
      <img src="./resources/img/logo.png" alt="东北林业大学logo" class="logo">
      <div class="user-info">
        <span></span>
        <button @click="logout" class="log">退出</button>
      </div>
    </header>

    <div class="main-container">
      <nav>
        <ul>
          <li style="text-align: center;" @click="navigate('/personal')">个人信息</li>
          <li style="text-align: center;" @click="navigate('/courses')">我教的课程</li>
          <li style="text-align: center;" @click="navigate('/bookRoom')">机房预约</li>
        </ul>
      </nav>

      <main>
         <div v-if="show">
         <hr>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores, iusto sapiente vel minus fugiat, quam praesentium dolorum ab consequuntur nemo commodi voluptatum temporibus et fugit eligendi hic libero est?
        
        </div>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* 全局字体和颜色设置 */
body {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

/* 头部样式 */
header {
  width: 83.32vw;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 100px; /* 替换为实际的logo宽度 */
  height: auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* 侧边栏样式 */
nav {
  width: 20vw; /* 侧边栏宽度为20% */
  height: 76vh; /* 侧边栏高度为100% */
  background-color: #f0f0f0;
  padding: 1rem;
  display: flex;
  flex-direction: column; /* 使列表垂直排列 */
}

nav ul {
  list-style-type: none;
  padding: 0;
  width: 100%; /* 确保列表宽度填满侧边栏 */
}

nav li {
  cursor: pointer;
  padding: 0.5rem 0;
  transition: background-color 0.3s;
  width: 100%; /* 确保列表项宽度填满侧边栏 */
}

nav li:hover {
  background-color: #e0e0e0;
}

/* 主内容区域样式 */
main {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.main-container {
  display: flex;
  height: 79vh;
  width: 85vw;
}

/* 响应式设计 */
@media (max-width: 768px) {
  nav, main {
    width: 100%;
    height: 100%;
  }

  .main-container {
    flex-direction: column;
    height: auto;
  }

  header {
    flex-direction: column;
    align-items: center;
  }
  
  .user-info {
    margin-top: 1rem;
  }
}
</style>