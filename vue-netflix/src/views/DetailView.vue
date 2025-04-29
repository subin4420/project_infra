<template>
  <div>
    <VideoPlayer v-if="movie" :movieId="movie.id" />
    <div v-else>로딩 중...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import VideoPlayer from '../components/VideoPlayer.vue';
import { getMovieById } from '../api/movie';  // ✅ API 연결

const route = useRoute();
const movie = ref(null);

onMounted(async () => {
  try {
    const movieId = route.params.id;
    const response = await getMovieById(movieId);
    movie.value = response.data;
  } catch (error) {
    console.error('영화 상세 정보를 불러오는 데 실패했습니다:', error);
  }
});
</script>
