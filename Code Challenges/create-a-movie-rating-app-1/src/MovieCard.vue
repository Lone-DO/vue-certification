<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
  updateRating: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="movie-card">
    <div class="movie-card__cover">
      <div class="movie-card__cover-rating">
        <div class="movie-card__cover-number">
          <span :title="!movie.rating && 'unrated'">{{ movie.rating || '-' }}</span>
        </div>
        <img
          class="movie-card__cover-star"
          :src="movie.rating ? 'star.ico' : 'star_unselected.ico'"
          :alt="movie.name"
        />
      </div>
      <img class="movie-card__cover-image" :src="movie.image" :alt="movie.name" />
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
          <span :title="!movie.rating && 'unrated'">Rating: ({{ movie.rating || '-' }}/5)</span>
          <img
            v-for="index in movie.ratings"
            :key="index"
            :src="movie.rating >= index ? 'star.ico' : 'star_unselected.ico'"
            :data-active="movie.rating === index"
            alt="rating star"
            @click="updateRating(movie, index)"
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
    &-image {
      border-radius: $border-radius-size $border-radius-size 0 0;
    }
    &-rating {
      top: 0;
      right: 0;
      position: absolute;
      img {
        width: 4rem;
      }
    }
    &-number {
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 2rem;
      position: absolute;
      align-items: center;
      justify-content: center;
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
        transition: transform 250ms;
        cursor: pointer;
        &:hover {
          transform: scale(1.25);
        }
        &:active {
          transform: scale(1.75);
        }
        &[data-active='true'] {
          cursor: not-allowed;
          transform: none;
        }
      }
    }
    &__footer {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
