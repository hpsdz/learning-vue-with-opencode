<script setup>
import { useUserStore } from '../stores/user';
import { useCounterStore } from '../stores/counter';
import { ref } from 'vue'; // Import ref for reactive variables

const userStore = useUserStore();
const counterStore = useCounterStore(); // Can access other stores

const changeUserName = () => {
  const newName = prompt('请输入新姓名:', userStore.name);
  if (newName) userStore.setName(newName);
};

const changeUserAge = () => {
  const newAge = prompt('请输入新年龄:', userStore.age);
  if (newAge && !isNaN(newAge)) userStore.setAge(parseInt(newAge));
};
</script>

<template>
  <div class="user-info">
    <h3>用户信息</h3>
    <p>姓名: {{ userStore.name }}</p>
    <p>年龄: {{ userStore.age }}</p>
    <p>是否成年: {{ userStore.isAdult ? '是' : '否' }}</p>
    <button @click="changeUserName">更改姓名</button>
    <button @click="changeUserAge">更改年龄</button>
    <p>其他 Store 的计数: {{ counterStore.count }}</p>
  </div>
</template>

<style scoped>
.user-info {
  background-color: #ffe0b2;
  padding: 10px;
  border-left: 3px solid #ff9800;
  margin-top: 10px;
  border-radius: 5px;
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