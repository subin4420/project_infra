<template>
  <div id="app">
    <header class="header">
      <div class="left-section">
        <img src="./assets/logo.png" alt="Miniflix" class="logo" @click="goHome" />
        <nav class="nav-menu">
          <a @click="goTo('/')">홈</a>
          <a @click="goTo('/series')">시리즈</a>
          <a @click="goTo('/movies')">영화</a>
          <a @click="goTo('/new')">NEW</a>
          <a @click="goTo('/trending')">요즘 대세</a>
          <a @click="goTo('/wishlist')">찜한 콘텐츠</a>
          <a @click="goTo('/languages')">언어별 탐색</a>
        </nav>
      </div>

      <div class="right-section">
        <i class="fas fa-search"></i>
        <i class="fas fa-bell"></i>
        <img src="./assets/avatar.png" alt="Profile" class="avatar" />
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => router.push('/');
const goTo = (path) => router.push(path);
</script>

<style scoped>


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141414;
  padding: 0.8rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  font-family: 'Pretendard', sans-serif;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo {
  height: 28px;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  gap: 1.2rem;
}

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  cursor: pointer;
}

.nav-menu a:hover {
  color: #e50914;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.right-section i {
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
