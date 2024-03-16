<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBarView from './SideBarView.vue';
import HomeWork1 from './HomeWorks/Homework1/HomeWork1.vue';
</script>

<template >
  <SideBarView id="sidebar"/>
  <RouterView id="router"/>
  <HomeWork1 id="homework"/>
</template>
<style >
    #app{
      display:flex;
    }
    #sidebar{
      width:200px;
      border:1px solid red;
    }
    #router{
      border:1px solid red;
      flex:1;
    }

</style>