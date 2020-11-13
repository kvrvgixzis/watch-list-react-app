import { render } from 'react-dom';
import App from './components/App';

import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { fetchFilms } from './redux/actions/films';

store.dispatch(fetchFilms());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
