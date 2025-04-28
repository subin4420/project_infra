<template>
  <div class="home">
    <HeroBanner :movie="featuredVideo" />
    <!-- <HeroBanner :movie="movies[0]" /> -->


    <h2 class="section-title">🔥 인기 콘텐츠</h2>
    <HorizontalRow :movies="popularVideos" />

    <h2 class="section-title">🎞 최신 업로드</h2>
    <HorizontalRow :movies="newVideos" />

    <h2 class="section-title">🧠 추천 영상</h2>
    <HorizontalRow :movies="recommendedVideos" />
  </div>
</template>

<script setup>
import HorizontalRow from '../components/HorizontalRow.vue';
import HeroBanner from '../components/HeroBanner.vue';
import thumb1 from '../assets/cdn/test2.png';
import { onMounted, ref } from 'vue';
import { getAllMovies } from '@/api/movie';

const movies = ref([]);

onMounted(async () => {
  const res = await getAllMovies(); // ✅ API 모듈로 요청
  movies.value = res.data;
});

// 실제로는 API에서 받아오는 데이터입니다
const popularVideos = [
  { id: '101', title: '오징어 게임', thumbnail: '../assets/cdn/thumbs/101/test1.jpg' },
  { id: '102', title: '더 글로리', thumbnail: '../assets/cdn/thumbs/102.jpg' },
  { id: '103', title: '킹덤', thumbnail: '../assets/cdn/thumbs/103.jpg' },
];
const newVideos = [
  { id: '201', title: '더 퍼스트 슬램덩크', thumbnail: '../assets/cdn/thumbs/201.jpg' },
  { id: '202', title: '서울의 봄', thumbnail: '../assets/cdn/thumbs/202.jpg' },
];
const featuredVideo = {
  id: '999',
  title: '귀궁',
  description: '뛰어난 신기를 타고났지만 무녀가 되기를 거부하는 연인...',
  thumbnail: thumb1  // 실제 큰 배경 이미지로 교체
};
const recommendedVideos = [
  { id: '301', title: '기생충', thumbnail: '../assets/cdn/thumbs/test1.jpg' },
  { id: '302', title: '괴물', thumbnail: '../assets/cdn/thumbs/test1.jpg' },
];

</script>

<style scoped>
.home {
  padding: 1rem;
}
.section-title {
  color: #fff;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
</style>
