import { showAlert } from './actions/app';
import { CREATE_FILM } from './types';

const forbiddenWords = [];

export const inputFilter = ({ dispatch }) => (next) => (action) => {
  if (action.type === CREATE_FILM) {
    const { title, comment } = action.payload;

    if (!title.trim()) {
      return dispatch(showAlert('Введите название'));
    }

    if (!comment.trim()) {
      return dispatch(showAlert('Оставьте комментарий'));
    }

    // const foundForbiddenWords = forbiddenWords.filter(
    //   (w) => title.includes(w) || comment.includes(w)
    // );

    // if (foundForbiddenWords.length) {
    //   return dispatch(showAlert('Статья содержит недопустимые слова'));
    // }
  }

  return next(action);
};
