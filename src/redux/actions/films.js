import { API_FILMS } from '../../api/urls';
import { CREATE_FILM, DELETE_FILM, FETCH_FILMS } from '../types';
import { hideLoader, showAlert, showLoader } from './app';

export function createFilm(film) {
  return async (dispatch) => {
    try {
      const response = await fetch(API_FILMS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(film),
      });
      if (!response.ok) {
        dispatch(showAlert('Ошибка при сохранении'));
      }
    } catch (error) {
      dispatch(showAlert('Ошибка при сохранении'));
    }
    dispatch({ type: CREATE_FILM, payload: film });
  };
}

export function deleteFilm(id) {
  return {
    type: DELETE_FILM,
    payload: id,
  };
}

export function fetchFilms() {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      console.log('API_FILMS: ', API_FILMS);
      const response = await fetch(API_FILMS);
      if (!response.ok) {
        dispatch(showAlert('Ошибка при сохранении'));
      }
      const json = await response.json();
      dispatch({ type: FETCH_FILMS, payload: json });
    } catch (error) {
      dispatch(showAlert('Ошибка при загрузке'));
    }
    dispatch(hideLoader());
  };
}
