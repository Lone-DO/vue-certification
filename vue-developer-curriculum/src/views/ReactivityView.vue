<template>
  <div id='reactive'>
    <div id='reactive-container'>
      <span>Current Count: {{ state.count }}</span>
      <button @click='increment'>+</button>
      <button @click='decrement'>-</button>
    </div>
    <form id='reactive-form' @submit.prevent='add' >
      <label for='name'>Name</label>
      <input name='name' v-model='name'/>
      <button type='submit'>Add Person</button>
    </form>
    <fieldset id='reactive-list'>
      <legend>List of People</legend>
      <ul>
        <li v-for='person in state.people' :key='person'>{{ person }}</li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup lang='ts'>
  import { ref, reactive } from 'vue';
  import { Ref } from 'vue';
  /** Declared Types */

  interface State { 
    count: number, 
    people: Array<string>, 
  };

  /** State */
  const state: State = reactive({ count: 0, people: [] });
  const name: Ref<string> = ref('');
  // const name = ref<string>('');

  /** Methods */
  function increment() {
    state.count++;
  }  
  function decrement() {
    state.count--;
  }
  function add() {
    if (!state.people.includes(name.value)) {
      state.people.push(name.value);
    }
    name.value = '';
  }
</script>

<style lang='scss'>
  #reactive {
    &-container, &-form {
      gap: .5rem;
      display: flex;
    }
  }
</style>
