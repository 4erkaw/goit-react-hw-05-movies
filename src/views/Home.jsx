import { useEffect, useState } from 'react';
import { fetchTrMovies } from 'services/MoviesAPI';
import MoviesList from 'components/MoviesList';
import Title from './../components/Title/Title';

export default function Home() {
  const [moviesTrend, setMoviesTrend] = useState([]);

  async function loadTrMovies() {
    try {
      const { results } = await fetchTrMovies();
      setMoviesTrend(results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadTrMovies();
  }, []);

  return (
    <>
      <Title title="day trandings" />
      <MoviesList movies={moviesTrend} />
    </>
  );
}
