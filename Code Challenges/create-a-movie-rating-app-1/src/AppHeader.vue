<script setup>
import { computed } from 'vue';

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
});

const averageRating = computed(() => {
  let [sum, valid] = [0, 0];
  for (const movie of props.movies) {
    if ([undefined, 0].includes(movie.rating)) continue;
    valid++;
    sum += movie.rating;
  }
  return Number(sum / valid).toFixed(2);
});

function addMovie(movie) {
  // return movie && movies.value.push(new Movie(movie));
}
</script>

<template>
  <header id="header">
    <span id="header-subtitle">
      Total Movies: {{ movies.length }} / Average Rating {{ averageRating }}
    </span>
    <div id="header-controller">
      <button id="btn-reset" @click="reset">Reset Ratings</button>
      <button id="btn-create" @click="create">Add Movie</button>
      <button id="btn-load" @click="fetch">Load from API</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  gap: 1rem;
  width: 100%;
  color: white;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 3rem;
  align-items: center;
  justify-content: space-between;
  &-controller {
    flex: 1;
    gap: 0.5rem;
    display: flex;
    justify-content: flex-end;
    button {
      padding: 0.25rem 0.5rem;
      border-radius: 8px;
      white-space: nowrap;
      background-color: #337085;
    }
  }
}
</style>
