import MovieList from 'components/MoviesList';
import { getTrendMovie } from '../services/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getTrendMovie();
      setMovies(data.data.results);
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList data={movies} />
    </div>
  );
};
export default Home;
