<template>
  <div>
    <h2>영상 상세 페이지</h2>
    <VideoPlayer :movieId="route.params.id" />
  </div>
</template>

<script setup>
import VideoPlayer from '../components/VideoPlayer.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
