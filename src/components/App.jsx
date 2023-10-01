import { lazy, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './Layout';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

const Home = lazy(() => import('../pages/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage'));

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/', { replace: true });
  });
  return null;
};

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
};

// import Movies from 'pages/MoviesPage';
// import Home from 'pages/HomePage';
// import MovieDetails from 'pages/MovieDetailsPage';
