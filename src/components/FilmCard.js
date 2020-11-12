import { useEffect, useState } from 'react';

const API_KEY = 'eeddb6b3c7a58009b97b8dde8b85c32d';
const POSTER_W = 200;
const POSTER_H = 400;
const PLACEHOLDER_SRC = `https://via.placeholder.com/${POSTER_W}x${POSTER_H}?text=Poster+not+found`;

const getFilmData = async (title) => {
  const filmData = {
    originalTitle: '',
    posterUrl: PLACEHOLDER_SRC,
  };

  if (!title) return filmData;

  title = title.split(' ').join('%20');
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${title}&&language=ru`;
  const res = await fetch(url);
  const json = await res.json();

  if (!json?.results?.length) return filmData;
  const target = json.results[0];

  console.log(`${title}: `, target);

  const posterPath = target.poster_path;
  filmData.posterUrl = `http://image.tmdb.org/t/p/w500/${posterPath}`;
  filmData.originalTitle = target.original_title;
  filmData.overview = target.overview;
  return filmData;
};

export const FilmCard = ({ film }) => {
  const [filmData, setFilmData] = useState(undefined);

  useEffect(() => {
    const fetchFilmData = async () => {
      const filmData = await getFilmData(film.title);
      setFilmData(filmData);
    };

    fetchFilmData();
  }, [film]);

  if (!filmData) return null;

  return (
    <div className="card">
      <img src={filmData.posterUrl} className="card__poster" alt="poster" />
      <div className="card__about">
        <h3 className="card__heading">{film.title}</h3>
        <h3 className="card__heading-original">{filmData.originalTitle}</h3>
        <p className="card__type">{film.type}</p>
        <p className="card__overview">
          <strong>Описание: </strong>
          {filmData.overview}
        </p>
        <p className="card__comment">
          <strong>Комментарий: </strong>
          {film.comment}
        </p>
        <p className="card__author">
          <strong>Добавил: </strong>
          {film.added_by}
        </p>
      </div>
    </div>
  );
};
