import s from "./MovieDetailedInfo.module.css";
import fallbackImg from "../img/fallback.png";
import PropTypes from "prop-types";

const MovieDetailedInfo = ({
  info: { name, title, poster_path, overview, genres, popularity },
}) => {
 let url = poster_path ? `https://image.tmdb.org/t/p/w300/${poster_path}` : fallbackImg;
  return (
    <div className={s.card}>
      <div className={s.imgHolder}>
        <img alt={title}
          className={s.poster} src={url} />
        
      </div>
      <div className={s.contentWrapper}>
        <h1>{title || name}</h1>
        <p className={s.p}>
          User rating: {popularity || "No rating available"}
        </p>
        <h2>Overview</h2>
        <p className={s.p}> {overview || "No overview available"}</p>
        <h2>Genres</h2>
        <p className={s.genres}>
          {" "}
          {genres && genres.map((item) => item.name + " ")}
        </p>
      </div>
    </div>
  );
};

MovieDetailedInfo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.string,
  popularity: PropTypes.string,
};

export default MovieDetailedInfo;
