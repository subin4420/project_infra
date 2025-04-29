<template>
  <div class="video-container">
    <video
      ref="videoRef"
      controls
      autoplay
    >
      브라우저가 video 태그를 지원하지 않습니다.
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Hls from 'hls.js';

const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);
let hls = null;

onMounted(() => {
  const video = videoRef.value;
  const src = `/stream/movie/${props.movieId}/playlist.m3u8`;

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = src;
  }
});

onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
  }
});
</script>

<style scoped>
.video-container {
  width: 100vw; /* 브라우저 전체 가로폭 */
  height: 100vh; /* 브라우저 전체 세로폭 (필요시 조정 가능) */
  display: flex;
  justify-content: center;
  align-items: center;
  background: black; /* 비디오 외부 여백이 생겼을 때 검정색 배경 */
}
video {
  width: 100%;
  height: auto;
  max-height: 100vh; /* 세로로 넘치지 않게 제한 */
}
</style>
