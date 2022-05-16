import { useState, useEffect, lazy, Suspense } from 'react';
import Searchbar from '../components/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByKeyword } from '../services/MoviesAPI';
import Loader from 'components/Loader';

const MoviesList = lazy(() => import('../components/MoviesList'));

export default function Movies() {
  const [page, setPage] = useState(1);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieQuery = searchParams.get('q') || '';
  const moviePage = searchParams.get('page') || '';

  async function loadMoviesByKeyword() {
    try {
      const res = await fetchMoviesByKeyword(movieQuery, moviePage);
      setSearchedMovies(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    loadMoviesByKeyword();
    // eslint-disable-next-line
  }, [movieQuery]);

  const saveSubmit = value => {
    setSearchParams({ q: value, page: page });
  };
  return (
    <>
      <Searchbar saveSubmit={saveSubmit} />
      <Suspense fallback={<Loader />}>
        <MoviesList movies={searchedMovies} />
      </Suspense>
    </>
  );
}
