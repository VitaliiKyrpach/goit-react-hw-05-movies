import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovies } from 'services/api';
export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const string = `movie/${movieId}`;
  const location = useLocation();
  const backLoc = useRef(location.state?.from ?? '/movies');
  useEffect(() => {
    const fetch = async () => {
      const data = await getMovies(string);
      setMovie(data.data);
    };
    fetch();
  }, [movieId, string]);
  return (
    <div>
      <Link to={backLoc.current}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <h2>{movie.original_title}</h2>
      <p>User score: {movie.vote_count}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        {movie.genres &&
          movie.genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
      </ul>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
