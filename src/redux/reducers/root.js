import { combineReducers } from 'redux';
import { app } from './app';
import { posts } from './posts';

export const root = combineReducers({ posts, app });
