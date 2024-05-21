<template>
  <div class="orders-container">
    <div v-for="(o, index) of orders" :key="index" class="order-item">
      <div v-if=" o.quantity!=0 ">
        {{ o.item.name }} / {{ o.quantity }}
      </div>
    
    </div>
  </div>
</template>

<script setup>
import { useH2Store } from './Store'
const store = useH2Store()

const orders = store.ordersS
</script>

<style scoped>
.orders-container {
  display: flex;
  flex-direction: column;
}

.order-item {
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  color: #333; 
}

</style>