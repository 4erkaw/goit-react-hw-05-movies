import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../views/Home';
import Movie from './MovieView';
import Movies from '../views/Movies';
import NotFound from '../views/NotFound';
import Cast from './Cast';
import Review from './Reviews/';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
