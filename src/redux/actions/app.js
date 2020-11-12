import { HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from '../types';

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function hideLoader() {
  return { type: HIDE_LOADER };
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
