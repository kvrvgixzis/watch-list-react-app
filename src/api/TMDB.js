import { PLACEHOLDER_POSTER_URL, TMDB_SEARCH_URL } from './urls';

export const getTMDBData = async (title) => {
  const filmData = {
    originalTitle: '',
    posterUrl: PLACEHOLDER_POSTER_URL,
  };

  if (!title) return filmData;

  title = title.split(' ').join('%20');
  const url = `${TMDB_SEARCH_URL}&query=${title}`;
  const res = await fetch(url);
  const json = await res.json();

  if (!json?.results?.length) return filmData;
  const target = json.results[0];
  console.log('target: ', target);

  filmData.posterUrl = `http://image.tmdb.org/t/p/w500/${target.poster_path}`;
  filmData.originalTitle = target.original_title;
  filmData.originalName = target.original_name;
  filmData.voteAvg = target.vote_average;
  filmData.voteCount = target.vote_count;
  filmData.overview = target.overview;

  return filmData;
};
