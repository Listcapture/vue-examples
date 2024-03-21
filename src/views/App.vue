<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import SideBarView from './SideBarView.vue';
import HomeWork1 from './HomeWorks/Homework1/HomeWork1.vue';
import type example02View from './examp01/example02View.vue';
import SelectView from './SelectCurriculm.vue'

let msg = "hello Tian!";
let msg2="404 NotFound!";
let  count = ref(100); 
let x=0;
function addCount(num:number)
{
  count.value+=num;
}
function SubCount(num:number)
{
  count.value-=x;
}
// 使用 ref 创建响应式数据count
</script>
<template >
  <!-- <SideBarView id="sidebar" /> -->
  <!-- <RouterView id="router" /> -->
  <SelectView/>
  <div id="app" >  
  </div>

</template>

<style>
/* #app {
  display: flex;
  height: 1080px;
}

#sidebar {
  width: 300px;
  border: 1px solid black;
}

#router {
  border: 1px solid black;
  flex: 1;
  
} */
</style>
<script>
   
</script>