import axios from 'axios';

export const getMovies = async (path, query) => {
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
