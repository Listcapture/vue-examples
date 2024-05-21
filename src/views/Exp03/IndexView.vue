<template>
  <div>
    <h1>Experiment03</h1>
    <div class="nav-links">
      <router-link :to="{ name: 'foods' }">美食</router-link> |
      <router-link to="/exp03/location">本地</router-link> |
      <a href="" @click.prevent>外卖</a>
    </div>
    <p>
      <router-link to="/exp03/orders" class="order">订单：{{ cost }}</router-link>
    </p>
      <router-view class="view" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useH2Store } from './Store'

const store = useH2Store()
const orders = store.ordersS

const cost = computed(() =>
  orders.value.reduce((pre, cur) => pre + cur.quantity * (cur.item.price ?? 0), 0).toFixed(2)
)
</script>

<style scoped>
.nav-links {
  margin-bottom: 10px;
}

.nav-links a,
.nav-links router-link {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  margin-right: 5px;
}

.order {
  display: inline-block;
  background: sandybrown;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
}

.view {
  padding: 5px;
}
</style>