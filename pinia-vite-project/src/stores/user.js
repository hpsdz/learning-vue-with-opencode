import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '匿名用户',
    age: 0,
  }),
  getters: {
    isAdult: (state) => state.age >= 18,
  },
  actions: {
    setName(newName) {
      this.name = newName;
    },
    setAge(newAge) {
      this.age = newAge;
    },
  },
});
