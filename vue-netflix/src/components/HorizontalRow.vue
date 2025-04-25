<template>
    <div class="row">
      <div class="card-container">
        <VideoCard
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoCard from './VideoCard.vue';
  defineProps(['movies']);
  </script>
  
  <style scoped>
  .row {
    overflow-x: auto;
  }
  .card-container {
    display: flex;
    gap: 1rem;
  }
  </style>
  