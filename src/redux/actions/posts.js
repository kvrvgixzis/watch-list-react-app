import { CREATE_POST, FETCH_POSTS } from '../types';
import { hideLoader, showAlert, showLoader } from './app';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
      const response = await fetch(url);
      const json = await response.json();
      dispatch({ type: FETCH_POSTS, payload: json });
    } catch (error) {
      dispatch(showAlert('Ошибка при загрузке'));
    }
    dispatch(hideLoader());
  };
}
