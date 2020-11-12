import { useSelector } from 'react-redux';
import { Loader } from './Loader';
import { FilmCard } from './FilmCard';
import '../styles/Films.css';
import '../styles/FilmCard.css';

export const Films = () => {
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

export default Films;
