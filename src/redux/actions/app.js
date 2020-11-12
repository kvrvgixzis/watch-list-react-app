import {
  HIDE_ADD_FORM,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ADD_FORM,
  SHOW_ALERT,
  SHOW_LOADER,
} from '../types';

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
}

export function showAddForm() {
  return { type: SHOW_ADD_FORM };
}

export function hideAddForm() {
  return { type: HIDE_ADD_FORM };
}

export function showAlert(alert) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: alert });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert() {
  return { type: HIDE_ALERT };
}
