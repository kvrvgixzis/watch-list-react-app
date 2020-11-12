import { render } from 'react-dom';
import App from './components/App';

import './index.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetchFilms } from './redux/actions/films';

store.dispatch(fetchFilms());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
