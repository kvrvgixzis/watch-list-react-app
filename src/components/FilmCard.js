import '../styles/FilmCard.css';

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getTMDBData } from '../api/TMDB';
import { Button } from './Button';

export const FilmCard = ({ film }) => {
  const [TMDBData, setTMDBData] = useState(undefined);
  const history = useHistory();

  const openBtnHandler = () => {
    history.push(`/film/${film.id}`);
  };

  useEffect(() => {
    const fetchTMDBData = async () => {
      const filmData = await getTMDBData(film.title);
      setTMDBData(filmData);
    };

    fetchTMDBData();
  }, [film]);

  if (!TMDBData) return null;

  return (
    <div className="card">
      <img src={TMDBData.posterUrl} className="card__poster" alt="poster" />
      <div className="card__about">
        <h3 className="card__heading">{film.title}</h3>
        <h3 className="card__heading-original">{TMDBData.originalTitle}</h3>
        <p className="card__type">{film.type}</p>
        <p className="card__overview">
          <strong>Описание: </strong>
          {TMDBData.overview}
        </p>
        <p className="card__comment">
          <strong>Комментарий: </strong>
          {film.comment}
        </p>
        <p className="card__author">
          <strong>Добавил: </strong>
          {film.added_by}
        </p>
        <Button
          className="card__open"
          clickHandler={openBtnHandler}
          title="Подробнее"
        />
      </div>
    </div>
  );
};
