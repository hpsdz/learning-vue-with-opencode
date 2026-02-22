<script setup>
import MyComponent from './components/MyComponent.vue';
import UserDisplay from './components/UserDisplay.vue';
import { useCounterStore } from './stores/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="main-app-container">
    <h1>Pinia 状态管理演示 (Vite 项目)</h1>

    <div class="box">
      <h2>根组件 (App.vue) 中的计数器状态</h2>
      <p>根组件内部计数: {{ counterStore.count }}</p>
      <p>通过 Store 访问双倍计数 (Getter): {{ counterStore.doubleCount }}</p>
      <button @click="counterStore.increment()">增加 Store 计数 (Action)</button>
      <button @click="counterStore.decrement()">减少 Store 计数 (Action)</button>
    </div>

    <MyComponent />
    <UserDisplay />
  </div>
</template>

<style scoped>
.main-app-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
}
h1 { text-align: center; color: #333; margin-bottom: 30px; }

.box {
  padding: 15px;
  margin: 15px 0;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #f9f9f9;
}
h2 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 5px; margin-bottom: 20px; }
p { line-height: 1.6; }

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
