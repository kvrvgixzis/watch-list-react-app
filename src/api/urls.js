const isDev = process.env.NODE_ENV === 'development';

const TMDB_API_KEY = 'eeddb6b3c7a58009b97b8dde8b85c32d';
const POSTER_W = 200;
const POSTER_H = 400;
const API_URL = isDev
  ? 'http://0.0.0.0:3004'
  : 'https://my-json-server.typicode.com/kvrvgixzis/watch-list-react-app';

export const API_FILMS = `${API_URL}/films`;
export const PLACEHOLDER_POSTER_URL = `https://via.placeholder.com/${POSTER_W}x${POSTER_H}?text=Poster+not+found`;
export const TMDB_SEARCH_URL = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=ru`;
