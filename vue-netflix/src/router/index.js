import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';
import SearchView from '../views/SearchView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/video/:id', component: DetailView },
  { path: '/search', component: SearchView },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
