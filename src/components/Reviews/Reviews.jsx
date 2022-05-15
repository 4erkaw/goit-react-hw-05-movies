import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/MoviesAPI';

export default function Reviews() {
  const [reviews, setReviews] = useState({});
  const { movieId } = useParams();

  async function loadMovieReviews() {
    try {
      const res = await fetchMovieReviews(movieId);
      setReviews(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadMovieReviews();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={s.list}>
      {reviews?.length ? (
        reviews.map(({ author, content, author_details, id }) => {
          return (
            <li key={id} className={s.item}>
              <h3 className={s.author}>{author || author_details.name}</h3>
              <p className={s.content}>
                {content || 'oops, there is no content from this author...'}
              </p>
            </li>
          );
        })
      ) : (
        <li>
          <p style={{ color: '#dbdbdbe1' }}>
            We don't have any reviews for this movie
          </p>
        </li>
      )}
    </ul>
  );
}
