<template>
    <video controls autoplay style="width: 100%; max-width: 800px">
      <source
        :src="`stream/movie/${movieId}/playlist.m3u8`"
        type="application/x-mpegURL"
      />
      브라우저가 video 태그를 지원하지 않습니다.
    </video>
  </template>
  
  <script setup>
  const props = defineProps({
    movieId: {
      type: String,
      required: true,
    },
  });
  </script>
  