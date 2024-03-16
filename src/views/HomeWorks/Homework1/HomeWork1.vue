<script setup lang="ts">
import { defineAsyncComponent, type Component,ref,computed} from 'vue';


const components:{name:string;component:Component}[]=[
  {
    name:'添加用户',
    component:defineAsyncComponent(()=>import('./AddUser.vue'))
  },{
    name:'删除用户',
    component:defineAsyncComponent(()=>import('./DeleteUser.vue'))
  },
  {
    name:'更新用户',
    component:defineAsyncComponent(()=>import('./UpdateUser.vue'))
  },
  
]
//加载组件索引
const currentIndexR=ref(0)
//基于索引动态加载组件
const currentComponentC=computed(()=>components[currentIndexR.value]?.component);
//激活状态组件的文字颜色
const activeStyleC=computed(()=>(index:number)=>index==currentIndexR.value?{color:'red',dec:'underline'}:{color:'black',dec:'none'})
</script>
<template>
<div>
   <p>XXXX</p>
    <span v-for="(c,index) of components" :key="index" @click="currentIndexR=index"
    :style="{
      color:activeStyleC(index).color,'text-decoration':activeStyleC(index).dec,cursor:'pointer',
      'margin-right':'10px'
    }">{{ c.name }}</span>
     <div>
      <component :is="currentComponentC"/>
     </div>


</div>
</template>