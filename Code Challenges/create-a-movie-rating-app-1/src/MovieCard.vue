<script setup>
import { defineProps } from 'vue';
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="movie-card">
    <div class="movie-card__cover">
      <img class="movie-card__image" :src="movie.image" :alt="movie.name" />
    </div>
    <div class="movie-card__info">
      <div class="movie-card__info__header">
        <h3 class="movie-card__info-name">{{ movie.name }}</h3>
        <div class="movie-card__info-genres">
          <p v-for="genre in movie.genres" :key="genre" class="movie-card__info-genre">
            {{ genre }}
          </p>
        </div>
      </div>
      <div class="movie-card__info__footer">
        <p class="movie-card__info-description">{{ movie.description }}</p>
        <div class="movie-card__info-ratings">
          <span>Rating: ({{ movie.rating }}/5)</span>
          <img
            v-for="index in movie.rating"
            :key="index"
            src="star.ico"
            alt="rating star"
            :data-active="index <= movie.rating"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$border-radius-size: 8px;
.movie-card {
  flex: 1 1;
  max-height: 750px;
  display: flex;
  min-width: 320px;
  max-width: 380px;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &__cover {
    height: 66%;
    overflow: hidden;
    img {
      border-radius: $border-radius-size $border-radius-size 0 0;
    }
  }
  &__info {
    gap: 1rem;
    padding: 1rem;
    display: flex;
    height: 30%;
    font-size: 14px;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0 0 $border-radius-size $border-radius-size;
    &-name {
      font-weight: 600;
      font-size: 1.25rem;
    }
    &-genres {
      gap: 0.25rem;
      display: flex;
      color: white;
      p {
        line-height: 100%;
        border-radius: 1rem;
        padding: 0.25rem 0.5rem;
        background-color: #6465f1;
      }
    }
    &-description,
    &-ratings {
      font-weight: 600;
    }
    &-description {
      height: 100px;
      overflow: auto;
    }
    &-ratings {
      gap: 0.25rem;
      display: flex;
      margin-top: auto;
      align-items: center;
      font-size: 0.75rem;
      span {
        margin-right: 0.25rem;
      }
      img {
        width: 1rem;
      }
    }
  }
}
</style>
