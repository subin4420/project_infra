<template>
    <video controls autoplay style="width: 100%; max-width: 800px">
      <source
        :src="`http://stream.dawon.local/video/videos/${videoId}/playlist.m3u8`"
        type="application/x-mpegURL"
      />
      브라우저가 video 태그를 지원하지 않습니다.
    </video>
  </template>
  
  <script setup>
  const props = defineProps({
    videoId: {
      type: String,
      required: true,
    },
  });
  </script>
  