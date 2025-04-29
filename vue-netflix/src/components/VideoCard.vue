<template>
  <div class="card" @click="goToDetail">
    <img :src="thumbnailUrl" :alt="movie.title" />
    <p>{{ movie.title }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps(['movie']);
const router = useRouter();

// ✅ id 기반으로 썸네일 경로를 만든다
//const thumbnailUrl = computed(() => `/assets/cdn/thumbs/${props.movie.id}.jpg`);
const thumbnailUrl = computed(() => `/cdn/thumbs/${props.movie.id}.jpg`);

const goToDetail = () => {
  router.push(`/movie/${props.movie.id}`);
};
</script>

<style scoped>
.card {
  width: 360px;
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