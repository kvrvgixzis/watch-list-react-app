import { compose, createStore } from 'redux';
import { root } from './reducers/root';

export const store = createStore(
  root,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
