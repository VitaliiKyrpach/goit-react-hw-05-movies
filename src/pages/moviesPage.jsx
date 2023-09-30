import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MoviesList';
import { SearchBar } from 'components/SearchBar';
import { useState, useEffect } from 'react';
import { getMovies } from 'services/api';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const string = 'search/movie';
  const onSubmit = input => {
    setQuery(input);
  };
  console.log(query);
  console.log(searchParams.get('query'));
  searchParams.size ? console.log(true) : console.log(false);
  useEffect(() => {
    if (!searchParams.get('query')) {
      setQuery('');
      setMovies([]);
    }
  }, [searchParams]);
  useEffect(() => {
    const fetch = async () => {
      const data = await getMovies(string, query);
      setMovies(data.data.results);
    };
    fetch();
  }, [query]);

  return (
    <>
      <SearchBar Submit={onSubmit} />
      <MovieList data={movies} />
    </>
  );
};
export default Movies;
