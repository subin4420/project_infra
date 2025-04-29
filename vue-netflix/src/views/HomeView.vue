<template>
  <div class="page-wrapper">
    <HeroBanner :movie="featuredMovie" />
    <div class="content-wrapper">
      <h2>인기 콘텐츠</h2>
      <HorizontalRow :movies="popularMovies" />

      <h2>최신 업로드</h2>
      <HorizontalRow :movies="newMovies" />

      <h2>추천 영상</h2>
      <HorizontalRow :movies="recommendedMovies" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import HorizontalRow from '../components/HorizontalRow.vue';
import HeroBanner from '../components/HeroBanner.vue';
import { getMovieById } from '../api/movie';  
import { getAllMovies } from '../api/movie';  // API 연결
const featuredMovie = ref([]);
const popularMovies = ref([]);
const newMovies = ref([]);
const recommendedMovies = ref([]);

onMounted(async () => {
  try {
    const response = await getAllMovies();
    const movies = response.data;

    // 여기서는 임시로 movies를 나눠서 넣는다
    featuredMovie.value = movies[0]; // 첫 번째 영화를 featuredVideo로 설정
    popularMovies.value = movies.slice(1, 7);
    newMovies.value = movies.slice(7, 13);
    recommendedMovies.value = movies.slice(13, 19);
  } catch (error) {
    console.error('영화 데이터를 불러오는 데 실패했습니다:', error);
  }
});
</script>
<style scoped>
.page-wrapper {
  margin: 0;
  padding: 0;
}

.content-wrapper {
  margin-left: 10pt;
  margin-right: 10pt;
  margin-top: 2rem; /* HeroBanner 밑에 콘텐츠는 살짝 띄워주자 */
}

h2 {
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
</style>