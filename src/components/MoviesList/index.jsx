import { Link, useLocation } from 'react-router-dom';
const MovieList = ({ data }) => {
  const location = useLocation();

  return (
    <ul className="movieList">
      {data.map(movie => (
        <li key={movie.id} className="card">
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
