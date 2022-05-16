import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, Fragment } from 'react';
import Layout from './Layout';
import Loader from './Loader';

const Movie = lazy(() => import('../views/Movie'));
const Home = lazy(() => import('../views/Home'));
const Movies = lazy(() => import('../views/Movies'));
const NotFound = lazy(() => import('../views/NotFound'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Fragment>
      <Layout />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};
