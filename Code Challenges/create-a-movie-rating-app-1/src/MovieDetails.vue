<script setup>
const model = defineModel({ required: true });

defineEmits(['close', 'save']);
defineProps({
  genres: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <section v-if="model" id="movie-details">
    <header>
      <h2>{{ model.id ? 'Editing' : 'New' }} Movie</h2>
      <button title="close modal" @click="$emit('close')">X</button>
    </header>
    <form @submit.prevent="$emit('save')">
      <div>
        <label for="movie-title">Name</label>
        <input id="movie-title" type="text" v-model="model.title" required />
      </div>
      <div>
        <label for="movie-description">Description</label>
        <textarea id="movie-description" v-model="model.description" width="100%" required />
      </div>
      <div>
        <label for="movie-image">Image</label>
        <input id="movie-image" type="url" v-model="model.image" />
      </div>
      <div id="movie-genres">
        <span id="movie-genres-title" for="movie-genres">Genres</span>
        <div v-for="genre of genres" :key="genre">
          <input
            type="checkbox"
            v-model="model.genres"
            :id="`genre-${genre}`"
            :value="String(genre).toLowerCase()"
          />
          <label :for="`genre-${genre}`">{{ genre }}</label>
        </div>
      </div>
      <footer>
        <button class="btn-cancel" @click="$emit('close')">Cancel</button>
        <button class="btn-reset" type="reset">Reset</button>
        <button class="btn-submit" type="submit">Save</button>
      </footer>
    </form>
  </section>
</template>

<style lang="scss" scoped>
$border: white 1px solid;
#movie-details {
  top: 3rem;
  z-index: 99;
  color: white;
  margin: 0 3rem;
  border: $border;
  max-width: 1000px;
  border-radius: 6px;
  position: absolute;
  & > * {
    padding: 1rem 2rem;
  }
  button {
    padding: 0 0.5rem;
    border-radius: 8px;
    white-space: nowrap;
    background-color: grey;
    &[class$='submit'] {
      background-color: #337085;
    }
    &[class$='cancel'] {
      background-color: darkred;
    }
  }
  header {
    display: flex;
    border-radius: 6px;
    background-color: #111827;
    justify-content: space-between;
  }
  footer {
    gap: 1rem;
    display: flex;
    flex-direction: row;
    button {
      padding: 0.25rem 0.75rem;
    }
  }
  form {
    gap: 1rem;
    display: flex;
    border-top: $border;
    flex-direction: column;
    border-radius: 0 0 6px 6px;
    background-color: #1d2331;
    & > div {
      display: flex;
      flex-direction: column;
      &[id$='genres'] {
        gap: 0.5rem;
        flex-wrap: wrap;
        flex-direction: row;
        & > div {
          min-width: 150px;
        }
      }
    }
    span {
      flex: 100% !important;
    }
  }
  input,
  textarea {
    color: black;
  }
}
</style>
