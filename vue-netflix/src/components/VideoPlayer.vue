<template>
  <div>
    <video
      ref="videoRef"
      controls
      autoplay
      style="width: 100%; max-width: 800px"
    >
      브라우저가 video 태그를 지원하지 않습니다.
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Hls from 'hls.js'; // ✅ HLS.js import

const props = defineProps({
  movieId: {
    type: String,
    required: true,
  },
});

const videoRef = ref(null);
let hls = null; // ✅ HLS 인스턴스

onMounted(() => {
  const video = videoRef.value;
  const src = `/stream/movie/${props.movieId}/playlist.m3u8`;

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // ✅ Safari 같은 경우
    video.src = src;
  }
});

onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
  }
});
</script>
