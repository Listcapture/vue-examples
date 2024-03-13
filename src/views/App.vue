<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBarView from './SideBarView.vue';
</script>

<template >
  <SideBarView id="sidebar"/>
  <RouterView id="router"/>
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