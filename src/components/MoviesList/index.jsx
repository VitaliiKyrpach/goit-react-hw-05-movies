import { Link, useLocation } from 'react-router-dom';
const MovieList = ({ data }) => {
  console.log(data);
  const location = useLocation();
  return (
    <ul>
      {data.map(movie => (
        <li key={movie.id}>
          {/* <Link to={`movies/${String(movie.id)}`} state={{ from: location }}>
            {movie.title}
          </Link> */}
          <Link to={String(movie.id)} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
