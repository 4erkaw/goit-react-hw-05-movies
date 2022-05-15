import MovieInfo from './MovieInfo';
import s from './Movie.module.css';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/MoviesAPI';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Container from 'components/Container';

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  async function loadMovieById() {
    try {
      const res = await fetchMovieById(movieId);
      setMovie(res);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadMovieById();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <MovieInfo movie={movie} />
      <Container>
        <h3 style={{ color: '#dbdbdbe1' }}>Additional infotmation</h3>
        <NavLink className={setActive} to={`/movies/${movieId}/cast`}>
          Cast
        </NavLink>
        <NavLink className={setActive} to={`/movies/${movieId}/reviews`}>
          Reviews
        </NavLink>
        <Outlet />
      </Container>
    </>
  );
}
