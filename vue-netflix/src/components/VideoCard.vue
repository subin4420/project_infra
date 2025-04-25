<template>
    <div class="card" @click="goToDetail">
      <img :src="video.thumbnail" :alt="video.title" />
      <p>{{ video.title }}</p>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  const props = defineProps(['video']);
  const router = useRouter();
  
  const goToDetail = () => {
    router.push(`/video/${props.video.id}`);
  };
  </script>
  
  <style scoped>
  .card {
    width: 180px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card img {
    width: 100%;
    border-radius: 4px;
  }
  .card p {
    color: #fff;
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }
  </style>
  