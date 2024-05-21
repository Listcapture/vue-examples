<template>
  <div>
    <h3 class="shop-name">{{ shop?.name }}</h3>
    <div class="item-container" v-for="(item, index) of shop?.items" :key="index">
      <img :src="item.url" alt="" class="item-image" />
      <div class="item-details">
        <span class="item-name">{{ item.name }}</span>
        <br />
        价格：{{ item.price }}
        <br />
        月销量：{{ item.sales }}
        <br />
        <button @click="remove(item)" class="quantity-button">-</button>
        <span class="order-quantity">{{ orderQ(item) }}</span>
        <button @click="add(item)" class="quantity-button">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Item, Shop } from './data/homework02'
import { useH2Store } from './Store'

import { getShopService } from './service'
import { useRoute } from 'vue-router'
const params = useRoute().params
const shop = ref<Shop>()

getShopService(Number.parseInt(params.sid as string)).then((sh) => {
  shop.value = sh
})
const store = useH2Store()
const orders = store.ordersS
const add = (item: Item) => {
  let order = orders.value.find((o) => o.item.id == item.id)
  if (order) {
    order.quantity++
  } else {
    order = { quantity: 1, item: item }
    orders.value.push(order)
  }
}
const remove = (item: Item) => {
  const order = orders.value.find((o) => o.item.id == item.id)
  if (order) {
    const q = order.quantity--
    if (q == 0) {
      orders.value.splice(orders.value.indexOf(order), 1)
    }
  }
}
const orderQ = computed(() => (item: Item) => {
  const o = orders.value.find((o) => o.item.id == item.id)
  return o?.quantity ?? 0
})

</script>

<style scoped>
.shop-name {
  margin: 0;
}

.item-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.item-image {
  width: 200px;
  padding: 5px;
}

.item-details {
  margin-left: 10px;
}

.item-name {
  font-weight: bold;
}

.quantity-button {
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.order-quantity {
  margin: 0 5px;
}
</style>