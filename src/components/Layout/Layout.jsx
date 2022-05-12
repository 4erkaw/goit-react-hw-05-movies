import { NavLink, Outlet } from 'react-router-dom';
import s from './Layout.module.css';

const setActive = ({ isActive }) => (isActive ? s.active : s.link);

export default function NavBar() {
  return (
    <>
      <header className={s.header}>
        <nav>
          <NavLink className={setActive} to="/">
            Home
          </NavLink>
          <NavLink className={setActive} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
