import MovieInfo from './MovieInfo';
import GoBack from './../GoBack/GoBack';
import s from './Movie.module.css';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import Container from 'components/Container';

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

export default function Movie() {
  const { pathname } = useLocation();
  return (
    <>
      <MovieInfo />
      <GoBack />
      <Container>
        <h3>Additional infotmation</h3>
        <NavLink className={setActive} to={`${pathname}/cast`}>
          Cast
        </NavLink>
        <NavLink className={setActive} to={`${pathname}/reviews`}>
          Reviews
        </NavLink>
        <Outlet />
      </Container>
    </>
  );
}
