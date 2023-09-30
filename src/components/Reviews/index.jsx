import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from 'services/api';
export const Reviews = () => {
  const [rev, setRev] = useState();
  const { movieId } = useParams();
  const string = `movie/${movieId}/reviews`;
  useEffect(() => {
    const fetch = async () => {
      const data = await getMovies(string);
      setRev(data.data.results);
      console.log(data.data.results);
    };
    fetch();
  }, [movieId, string]);
  return (
    <ul>
      {rev && rev.length
        ? rev.map((item, idx) => {
            return (
              <li key={idx}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })
        : "Sorry! We don't have any reviews for this movie"}
    </ul>
  );
};
