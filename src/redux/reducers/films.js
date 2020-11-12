import { CREATE_FILM, DELETE_FILM, FETCH_FILMS } from '../types';

const initialState = {
  films: [],
};

export const films = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FILM:
      return { ...state, films: [action.payload, ...state.films] };
    case DELETE_FILM:
      return {
        ...state,
        films: [...state.films.filter((film) => film.id !== action.payload)],
      };
    case FETCH_FILMS:
      return { ...state, films: action.payload };
    default:
      return state;
  }
};
