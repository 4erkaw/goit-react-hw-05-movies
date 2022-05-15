import imgNotFound from '../Images/imgNotFound.png';
import s from './MovieInfo.module.css';
import GoBack from '../GoBack';

export default function MovieInfo({ movie, path }) {
  const {
    title,
    name,
    release_date,
    first_air_date,
    overview,
    vote_average,
    poster_path,
    genres,
  } = movie ?? {};
  return (
    <>
      {movie && (
        <>
          <div className={s.cardWrapper}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : imgNotFound
              }
              alt={title || name}
              width="300px"
            />
            <div className={s.contentWrapper}>
              <h2 className={s.title}>
                {title || name}{' '}
                {new Date(release_date || first_air_date).getFullYear() || ''}
              </h2>
              <p className={s.text}>User Score: {vote_average * 10}%</p>
              <h2 className={s.title}>Overview</h2>
              <p className={s.text}>{overview || 'Data not found'}</p>
              <h2 className={s.title}>Genres</h2>
              {genres.length ? (
                <ul>
                  {genres.map(({ name }, idx) => (
                    <li key={idx}>{name}</li>
                  ))}
                </ul>
              ) : (
                <p>Genres Unavailable</p>
              )}
              <GoBack />
            </div>
          </div>
        </>
      )}
    </>
  );
}
