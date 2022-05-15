import { Link } from 'react-router-dom';
import imgNotFound from '../Images/imgNotFound.png';
import s from './MovieList.module.css';

export default function MoviesList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(({ title, id, poster_path, name }) => (
        <li className={s.item} key={id}>
          <Link to={`/movies/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : imgNotFound
              }
              alt={title || name}
              width="100%"
            />
            <p className={s.movieTitle}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
