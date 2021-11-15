import { Link, useLocation } from "react-router-dom";
import fallbackImg from "../img/fallback.png";
import s from "./MoviesList.module.css";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const { pathname } = useLocation();

  return (
    <ul className={s.container}>
      {movies.map((movie) => {
        let url = movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}` : fallbackImg;
        return (
        <li className={s.card} key={movie.id}>
          <Link
            className={s.link}
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: pathname },
            }}
          >
            <div className={s.picWrapper}>
              <img alt={movie.title || movie.name}
                className={s.poster} src={url}/>
            </div>
            <div className={s.textWrapper}>
              <span>{movie.title || movie.name}</span>
            </div>
          </Link>
        </li>
      )})}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  })
  ),
};
export default MoviesList;
