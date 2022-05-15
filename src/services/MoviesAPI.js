import PropTypes from 'prop-types';
import axios from 'axios';

const KEY = '4bf1417154393116d8548f1db7b199dd';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrMovies() {
  const res = await axios.get(`/trending/movie/day?api_key=${KEY}&page=1`);
  return res.data;
}

export async function fetchMovieById(id) {
  const res = await axios.get(`/movie/${id}?api_key=${KEY}`);
  return res.data;
}

export async function fetchMovieCast(id) {
  const res = await axios.get(`/movie/${id}/credits?api_key=${KEY}`);
  return res.data.cast;
}
export async function fetchMovieReviews(id) {
  const res = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`);
  return res.data.results;
}

export async function fetchMoviesByKeyword(query, page) {
  const res = await axios.get(
    `/search/movie/?api_key=${KEY}&query=${query}&page=${page}&include_adult=false`
  );
  return res.data.results;
}
