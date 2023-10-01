import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovie } from 'services/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLoc = useRef(location.state?.from ?? '/movies');
  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
  useEffect(() => {
    const fetch = async () => {
      const data = await getMovie(movieId);
      setMovie(data.data);
    };
    fetch();
  }, [movieId]);
  return (
    <>
      <Link to={backLoc.current} className="goBack">
        Go back
      </Link>
      <div className="mainInfo">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultImg
          }
          alt=""
        />
        <div className="description">
          <h2>{movie.original_title}</h2>
          <p>User score: {movie.vote_count}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul className="genres">
            {movie.genres &&
              movie.genres.map((genre, idx) => <li key={idx}>{genre.name}</li>)}
          </ul>
        </div>
      </div>
      <div className="Add">
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
};
export default MovieDetails;
