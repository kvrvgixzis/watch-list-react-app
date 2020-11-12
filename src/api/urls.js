const isDev = process.env.NODE_ENV === 'development';

const API_URL = isDev
  ? 'http://0.0.0.0:3004'
  : 'https://my-json-server.typicode.com/kvrvgixzis/watch-list-react-app';

export const API_FILMS = `${API_URL}/films`;
