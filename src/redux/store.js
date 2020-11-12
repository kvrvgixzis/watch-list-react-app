import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { inputFilter } from './middleware';
import { root } from './reducers/root';

export const store = createStore(root, applyMiddleware(thunk, inputFilter));
