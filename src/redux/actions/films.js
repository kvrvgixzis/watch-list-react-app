import { API_FILMS } from '../../api/urls';
import { CREATE_FILM, DELETE_FILM, FETCH_FILMS } from '../types';
import { hideLoader, showAlert, showLoader } from './app';

export function createFilm(film) {
  return async (dispatch) => {
    const response = await fetch(API_FILMS, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(film),
    });
    const json = await response.json();
    console.log('json: ', json);
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
      const response = await fetch(API_FILMS);
      const json = await response.json();
      dispatch({ type: FETCH_FILMS, payload: json });
    } catch (error) {
      dispatch(showAlert('Ошибка при загрузке'));
    }
    dispatch(hideLoader());
  };
}
