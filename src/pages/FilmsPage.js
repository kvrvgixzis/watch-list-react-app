import '../styles/FilmsPage.css';

import { useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { FilmCard } from '../components/FilmCard';

export const FilmsPage = () => {
  const films = useSelector((state) => state.films.films);
  const loading = useSelector((state) => state.app.loading);

  if (loading) return <Loader />;

  if (!films.length) return <div>Фильмов нет ¯\_(ツ)_/¯</div>;

  return (
    <div className="grid">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
};
