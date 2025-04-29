<template>
  <div class="hero" :style="backgroundImage">
    <div class="overlay">
      <h1 class="title">{{ movie.title }}</h1>
      <p class="description">{{ movie.description }}</p>
      <div class="buttons">
        <button class="play" @click="goToDetail">▶ 재생</button>
        <button class="info">ℹ 상세정보</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';  // ✅ 이거 추가해야 합니다

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  }
});

const router = useRouter();

// 👉 배경 이미지 스타일
const backgroundImage = computed(() => {
  if (!props.movie || !props.movie.id) return '';
  return `background-image: url('/cdn/thumbs/${props.movie.id}.jpg')`;
});

// 👉 재생 버튼 클릭
const goToDetail = () => {
  router.push(`/movie/${props.movie.id}`);
};
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
