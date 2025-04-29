import axios from 'axios';

export const getAllMovies = () => axios.get('/api/movies', {
    headers: {
        'X-Requested-With': 'XMLHttpRequest'  // 또는 Authorization 토큰
      }
});
export const getMovieById = (id) => axios.get(`/api/movies/${id}`);