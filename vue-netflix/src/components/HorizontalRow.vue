<template>
    <div class="row">
      <div class="card-container">
        <VideoCard
          v-for="video in videos"
          :key="video.id"
          :video="video"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoCard from './VideoCard.vue';
  defineProps(['videos']);
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
  