import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
export const Cast = () => {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  const string = `movie/${movieId}/credits`;
  useEffect(() => {
    const fetch = async () => {
      const data = await getMovies(string);
      setCast(data.data.cast);
    };
    fetch();
  }, [movieId, string]);
  return (
    <ul>
      {cast &&
        cast.map((star, idx) => {
          return (
            <li key={idx}>
              <img
                src={`https://image.tmdb.org/t/p/w200${star.profile_path}`}
                alt=""
              />
              <p>{star.name}</p>
              <p>Character: {star.character}</p>
            </li>
          );
        })}
    </ul>
  );
};
