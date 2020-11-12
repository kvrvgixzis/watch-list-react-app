import {
  HIDE_LOADER,
  SHOW_LOADER,
  SHOW_ALERT,
  HIDE_ALERT,
  SHOW_ADD_FORM,
  HIDE_ADD_FORM,
} from '../types';

const initialState = {
  loading: false,
  alert: null,
  isAddFormShow: false,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case SHOW_ADD_FORM:
      return { ...state, isAddFormShow: true };
    case HIDE_ADD_FORM:
      return { ...state, isAddFormShow: false };
    default:
      return state;
  }
};
