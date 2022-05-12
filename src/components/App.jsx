import { Route, Routes } from 'react-router-dom';
// import Container from './Container';
import Layout from './Layout';
import Home from '../views/Home';
import Movies from '../views/Movies';
import NotFound from '../views/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
