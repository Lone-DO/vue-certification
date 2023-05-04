<template>
  <div id='reactive'>
    <div id='reactive-container'>
      <span>Current Count: {{ state.count }}</span>
      <button @click='increment'>+</button>
      <button @click='decrement'>-</button>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import { reactive } from 'vue';
  const state = reactive({ count: 0});
  function increment() {
    state.count++;
  }  
  function decrement() {
    state.count--;
  }
</script>

<style lang='scss'>
  #reactive {
    &-container {
      gap: .5rem;
      display: flex;
    }
  }
</style>
