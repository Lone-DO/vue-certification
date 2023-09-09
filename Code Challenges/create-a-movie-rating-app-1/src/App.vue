<script setup>
import { ref } from 'vue';
import { items as _movies } from './movies.json';
import MovieCard from './MovieCard.vue';

const parsed = _movies.map((movie) => ({ ...movie, ratings: [1, 2, 3, 4, 5] }));
const movies = ref(parsed);

function updateRating(movie = {}, rating = 0) {
  movie.rating = rating;
}

/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <!-- This is where your template goes	-->
  <main id="root">
    <section id="content">
      <MovieCard v-for="movie in movies" :key="movie.id" v-bind="{ movie, updateRating }" />
    </section>
  </main>
</template>

<style lang="scss">
#root {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  #content {
    gap: 1rem;
    padding: 7rem 3rem;
    display: flex;
    align-items: stretch;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;
    max-height: 100%;
    justify-content: center;
  }
}
</style>
