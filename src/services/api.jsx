import axios from 'axios';

export const getData = async (path, query) => {
  const response = await axios({
    method: 'GET',
    url: path,
    params: { query: query, language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkwOGVjOGVmMzBkNmFjYzFjM2UzYzBhMjVjMTUzNSIsInN1YiI6IjY1MTdlNWMxOWQ1OTJjMDEyMjE2OGQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fbLVwAwR41ScYcPukNnonnvcTRC3wumnZSCK0JIWq0g',
    },
  });
  return response;
};
export const getMovieCredits = async movieId => {
  return await getData(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
};
export const getMovieReviews = async movieId => {
  return await getData(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);
};
export const getFindMovie = async query => {
  return await getData(`https://api.themoviedb.org/3/search/movie`, query);
};
export const getTrendMovie = async () => {
  return await getData(`https://api.themoviedb.org/3/trending/movie/day`);
};
export const getMovie = async movieId => {
  return await getData(`https://api.themoviedb.org/3/movie/${movieId}`);
};
