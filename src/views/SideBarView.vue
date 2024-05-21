
<script setup lang="ts">
import { ref } from 'vue';
let count=ref(0);
const Total=17.5;
function addCount(num:number)
{
  count.value+=num;
}
function SubCount(num:number)
{
  count.value-=num;
}
//定义课程类
interface Curriculum{
    index:number,
    name:string;
    cent:number;
    sem:number;
}
let  clickToStart =function( )
{
   console.log("111" );
};
//定义静态课程数组
let list:Curriculum[]=[
    {index:0,name:'Web前端开发技术',cent:2,sem:4},
    {index:1,name:'Java程序设计',cent:2.5,sem:4},
    {index:2,name:'XML与WebService技术',cent:2,sem:5},
    {index:3,name:'Web开发技术',cent:2.5,sem:5},
    {index:4,name:'移动终端软件设计',cent:2.5,sem:6},
    {index:5,name:'服务科学与SOA',cent:2,sem:6},
    {index:6,name:'企业资源计划',cent:2,sem:6},
    {index:7,name:'Web系统框架',cent:2.5,sem:6},
    {index:8,name:'大数据开发基础',cent:2.5,sem:6},
    {index:9,name:'Python应用',cent:2.5,sem:6},


];
//定义选中课程动态数组
let selected=ref<Curriculum[]>([]);
function Process(index: number, e: Event) {
let curRef=ref<Curriculum>(list[0]);
console.log(curRef.value.name);
  const target = e.target as HTMLInputElement;
  //添加选中课程
  if (target.checked) {
    selected.value.push(list[index]);
    addCount(list[index].cent);
  }else 
  {
    //删除选中课程
    for(let i=0;i<selected.value.length;i++)
    {
       

        if(selected.value[i].index==index)
        {
            selected.value.splice(i,1);
        }
    }
    SubCount(list[index].cent);
    console.log('failed');
  }
  //排序
  selected.value.sort((a,b)=>{return a.sem - b.sem;});
  console.log(selected.value.length);
}
</script>

<style scoped>
.container {
  display: flex;
}

.Table {
  width: 300px;
  border: 1px solid black;
}

.show {
  border: 1px solid black;
  flex: 1;
  
}
</style>

<template>
<div class="container">

    
    <div class="Table">
        <h1 :style="{color:count>12?'green':'red'}">{{ count }}/{{ Total }}</h1>
        <div v-for="(cur) in list" :key="cur.index" >
      <!-- 在这里渲染循环的内容 -->
      <input type="checkbox" :name="cur.name" :checked="false" :id="cur.name" @change="Process(cur.index,$event)" >
      <label :for="cur.name">{{ cur.name }}{{ cur.cent }}({{ cur.sem }})</label>
    </div>

    </div>
    

    <div class="show">
        <h1>
            show 
          
        </h1>
        <div v-for="cur in selected" :key="cur.index">
            {{ cur.name }}-{{ cur.cent }}({{ cur.sem }})
        </div>
        <div v-if="true" @click="clickToStart" :color="'red'" >
            hello world
        </div>
    </div>
    
</div>
</template>
