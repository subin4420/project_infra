<template>
    <div class="hero" :style="`background-image: url(${movie.thumbnail})`">
      <div class="overlay">
        <h1 class="title">{{ movie.title }}</h1>
        <p class="description">{{ movie.description }}</p>
        <div class="buttons">
          <button class="play">▶ 재생</button>
          <button class="info">ℹ 상세정보</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    movie: {
      type: Object,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .hero {
    position: relative;
    height: 70vh;
    background-size: cover;
    background-position: center;
    color: white;
    display: flex;
    align-items: flex-end;
  }
  
  .overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0));
    width: 100%;
    padding: 2rem;
  }
  
  .title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .description {
    font-size: 1rem;
    max-width: 60%;
    margin-bottom: 1rem;
  }
  
  .buttons button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    padding: 0.6rem 1.4rem;
    margin-right: 1rem;
    border-radius: 4px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .buttons button:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  </style>
  