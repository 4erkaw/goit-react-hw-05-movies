import s from './Cast.module.css';
import imgNotFound from '../Images/imgNotFound.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, IMG_URL } from '../../services/MoviesAPI';

export default function Cast() {
  const [castList, setCastList] = useState({});
  const { movieId } = useParams();

  async function loadMovieCast() {
    try {
      const res = await fetchMovieCast(movieId);
      setCastList(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadMovieCast();
  }, []);

  if (!castList.length) {
    return;
  }

  return (
    <ul className={s.list}>
      {castList.map(({ name, character, profile_path, id }) => {
        return (
          <li key={id} className={s.item}>
            <img
              width="100%"
              src={profile_path ? IMG_URL + profile_path : imgNotFound}
              alt={name}
            ></img>
            <div className={s.info}>
              <p className={s.name}>{name}</p>
              <p>Character: {character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
