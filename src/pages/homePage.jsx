import MovieList from 'components/MoviesList';
import { getMovies } from '../services/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const string = 'trending/movie/day';

  useEffect(() => {
    const fetch = async () => {
      const data = await getMovies(string);
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
