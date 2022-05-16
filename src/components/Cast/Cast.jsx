import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast, IMG_URL } from '../../services/MoviesAPI';
import imgNotFound from '../Images/imgNotFound.png';
import s from './Cast.module.css';

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
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={s.list}>
      {castList?.length ? (
        castList.map(({ name, character, profile_path, id }) => {
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
        })
      ) : (
        <li style={{ marginTop: '15px' }}>
          <p style={{ color: '#dbdbdbe1' }}>
            There is no information about casts
          </p>
        </li>
      )}
    </ul>
  );
}
