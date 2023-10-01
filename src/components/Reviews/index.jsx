import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export const Reviews = () => {
  const [rev, setRev] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const data = await getMovieReviews(movieId);
      setRev(data.data.results);
    };
    fetch();
  }, [movieId]);
  return (
    <div>
      {rev && rev.length ? (
        <ul className="rev">
          {rev.map((item, idx) => {
            return (
              <li key={idx}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>"Sorry! We don't have any reviews for this movie"</p>
      )}
    </div>
  );
};
