import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { forbiddenWordsMiddleware } from './middleware';
import { root } from './reducers/root';

export const store = createStore(
  root,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
