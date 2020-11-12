import { showAlert } from './actions/app';
import { CREATE_POST } from './types';

const forbiddenWords = ['fuck', 'spam', 'php'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const findedForbiddenWords = forbiddenWords.filter((w) =>
          action.payload.title.includes(w)
        );

        if (findedForbiddenWords.length) {
          return dispatch(showAlert('Название содержит недопустимые слова'));
        }
      }

      return next(action);
    };
  };
}
