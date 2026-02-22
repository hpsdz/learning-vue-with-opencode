<script setup>
import { useCounterStore } from '../stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="box" style="background-color: #e0f2ff; border-color: #007bff;">
    <h3>子组件中的计数器</h3>
    <p>通过 Store 访问计数: <span class="counter-display">{{ counterStore.count }}</span></p>
    <p>通过 Store 访问双倍计数 (Getter): <span class="counter-display">{{ counterStore.doubleCount }}</span></p>
    <button @click="counterStore.increment()">增加 Store 计数 (Action)</button>
  </div>
</template>

<style scoped>
.box {
  padding: 15px;
  margin: 15px 0;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #f9f9f9;
}
.counter-display {
  font-size: 2em;
  font-weight: bold;
  color: #d81b60;
  margin-top: 10px;
}
button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
button:hover {
  background-color: #0056b3;
}
</style>