
<script setup lang="ts">
let user = { name: 'litian' };
</script>

<template>
  <div>
    <h1><RouterLink to="/example01">example01</RouterLink></h1>
    {{ user.name }}
  </div>
</template>