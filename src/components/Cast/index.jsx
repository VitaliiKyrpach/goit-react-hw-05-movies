import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
export const Cast = () => {
  const defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
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
    <div>
      {cast && cast.length ? (
        <ul className="cast">
          {cast.map((star, idx) => {
            return (
              <li key={idx}>
                <img
                  src={
                    star.profile_path
                      ? `https://image.tmdb.org/t/p/w500${star.profile_path}`
                      : defaultImg
                  }
                  alt=""
                  width={250}
                />
                <p className="name">{star.name}</p>
                <p className="char">Character: {star.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>"Sorry! We don't have any cast data for this movie"</p>
      )}
    </div>
  );
};
