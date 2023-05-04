<template>
  <div id='reactive'>
    <span>Current Count: {{ state.count }}</span>
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
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
    gap: .5rem;
    display: flex;
  }
</style>
