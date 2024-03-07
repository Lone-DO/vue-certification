<script setup>
import { ref, computed, onMounted } from 'vue';
/** General */
import api from './common/api.js';
import Movie from './model/Movie.js';
import { items as _movies } from './movies.json';
/** Components */
import MovieCard from './MovieCard.vue';
import AppHeader from './AppHeader.vue';
import MovieDetails from './MovieDetails.vue';

const _genres = ref([]);
const genres = computed(() => _genres.value.map(({ description }) => description));

const movies = ref([]);
const storedMovies = ref([]);

const selectedMovie = ref(null);

async function getGenres() {
  try {
    const storage = localStorage.getItem('genres');
    if (!storage) {
      const { genres: data } = await api.get('/title/list-popular-genres');
      localStorage.setItem('genres', JSON.stringify(data));
      _genres.value = data;
    } else _genres.value = JSON.parse(storage);
  } catch (error) {
    console.error(error);
  }
  return _genres;
}

function updateRating(movie = {}, rating = 0) {
  movie.rating = rating;
  return saveMovies();
}

function restoreMovies() {
  storedMovies.value = JSON.parse(localStorage.getItem('movies') || '[]');
  if (!storedMovies.value || !storedMovies.value?.length) storedMovies.value = _movies;
  return Promise.resolve(storedMovies);
}

function updateMovie() {
  console.log(selectedMovie.value);
  selectedMovie.value = null;
}

function saveMovies() {
  if (!movies.value) return Promise.resolve();
  const data = JSON.stringify(movies.value);
  return data ? localStorage.setItem('movies', data) : null;
}

function parseMovies(data) {
  return data && data.map((movie) => new Movie(movie));
}

onMounted(async () => {
  await restoreMovies();
  await getGenres();
  movies.value = await parseMovies(storedMovies.value);
});
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <!-- This is where your template goes	-->
  <main id="root">
    <AppHeader v-bind="{ movies }" @new="selectedMovie = new Movie()" />
    <MovieDetails
      v-model="selectedMovie"
      v-bind="{ genres }"
      @close="selectedMovie = null"
      @save="updateMovie()"
    />
    <section id="content">
      <MovieCard v-for="movie in movies" :key="movie.id" v-bind="{ movie, updateRating, genres }" />
    </section>
  </main>
</template>

<style lang="scss">
#root {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
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
