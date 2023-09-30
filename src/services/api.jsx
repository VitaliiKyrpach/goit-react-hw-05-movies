import axios from 'axios';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = 'ef908ec8ef30d6acc1c3e3c0a25c1535';

export const getMovies = async (path, query) => {
  console.log(query);
  const response = await axios({
    method: 'GET',
    url: path,
    baseURL: 'https://api.themoviedb.org/3/',
    params: { query: query, language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjkwOGVjOGVmMzBkNmFjYzFjM2UzYzBhMjVjMTUzNSIsInN1YiI6IjY1MTdlNWMxOWQ1OTJjMDEyMjE2OGQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fbLVwAwR41ScYcPukNnonnvcTRC3wumnZSCK0JIWq0g',
    },
  });
  return response;
};
