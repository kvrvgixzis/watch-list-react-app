import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_FILMS } from '../api/urls';
import { getTMDBData } from '../api/TMDB';
import { Loader } from './Loader';

import '../styles/FilmPage.css';

export const FilmPage = () => {
  const [film, setFilm] = useState(undefined);
  const [TMDBData, setTMDBData] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchTMDBData = async () => {
      if (!film) return;
      const filmData = await getTMDBData(film.title);
      setTMDBData(filmData);
    };

    const fetchFilm = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_FILMS}/${id}`);
        if (!response.ok) {
          setError(true);
          return;
        }
        const json = await response.json();
        setFilm(json);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    !film && fetchFilm();
    !TMDBData && fetchTMDBData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isError, isLoading]);

  if (isError) return <div>Что-то пошло не так</div>;

  if (isLoading || !film || !TMDBData) return <Loader />;

  return (
    <div className="film-page">
      <h1>
        {film.title} | {TMDBData.originalTitle || TMDBData.originalName}
      </h1>
      <p>{film.type}</p>
      <div className="film-page__about">
        <div>
          <img src={TMDBData.posterUrl} alt="poster" />
        </div>
        <div>
          <p>
            <strong>Описание: </strong>
            {TMDBData.overview}
          </p>
          <p>
            <strong>Комментарий: </strong>
            {film.comment}
          </p>
          <p>
            <strong>Оценка: </strong>
            {TMDBData.voteAvg}
          </p>
          <p>
            <strong>Добавил: </strong>
            {film.added_by}
          </p>
        </div>
      </div>
    </div>
  );
};
