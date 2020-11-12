import { combineReducers } from 'redux';
import { app } from './app';
import { films } from './films';

export const root = combineReducers({ films, app });
