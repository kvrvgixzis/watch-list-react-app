import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAddForm } from '../redux/actions/app';
import { createFilm } from '../redux/actions/films';

import '../styles/AddForm.css';
import { Button } from './Button';

export const AddForm = () => {
  const [film, setFilm] = useState({ title: '', comment: '' });
  const formRef = useRef();

  const dispatch = useDispatch();
  const isAddFormShow = useSelector((state) => state.app.isAddFormShow);

  const clearInput = () => {
    setFilm((prev) => ({ ...prev, title: '', comment: '' }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    clearInput();
    const id = Date.now().toString();
    dispatch(createFilm({ ...film, id }));
  };

  const changeInputHandler = ({ target: input }) => {
    setFilm((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (!isAddFormShow) return;
      if (formRef.current && !formRef.current.contains(target)) {
        dispatch(hideAddForm());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [formRef, dispatch, isAddFormShow]);

  if (!isAddFormShow) return null;

  return (
    <div className="form">
      <form ref={formRef} className="form__body" onSubmit={submitHandler}>
        <h5 className="form__title">Что посоветуешь?</h5>
        <div className="form__inputs">
          <input
            className="form__input"
            name="title"
            type="text"
            placeholder="Название"
            value={film.title}
            onChange={changeInputHandler}
          />

          <select
            name="type"
            onChange={changeInputHandler}
            className="form__input"
          >
            <option select="true">Кино</option>
            <option>Сериал</option>
            <option>Мультфильм</option>
            <option>Мультсериал</option>
            <option>Аниме</option>
          </select>
          <textarea
            className="form__input"
            placeholder="Комментарий"
            value={film.comment}
            name="comment"
            id="comment"
            rows={10}
            onChange={changeInputHandler}
          />
          <input
            className="form__input"
            name="added_by"
            type="text"
            placeholder="Представься"
            value={film.added_by}
            onChange={changeInputHandler}
          />
        </div>
        <Button title="Создать" type="submit" />
      </form>
    </div>
  );
};

export default AddForm;
