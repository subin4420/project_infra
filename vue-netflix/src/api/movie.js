import axios from 'axios';

export const getAllMovies = () => axios.get('/api/movies');
export const getMovieById = (id) => axios.get(`/api/movies/${id}`);