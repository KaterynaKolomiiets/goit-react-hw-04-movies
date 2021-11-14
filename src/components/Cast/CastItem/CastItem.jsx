import s from "./CastItem.module.css";
import ReactImageFallback from "react-image-fallback";
import fallbackImg from "../../img/fallback.png";
import PropTypes from "prop-types";

const CastItem = ({ actor: { name, character, profile_path } }) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200/";
  return (
    <li className={s.card}>
      <ReactImageFallback
        alt={name}
        className={s.img}
        src={`${BASE_IMG}${profile_path}`}
        fallbackImage={fallbackImg}
      />
      <div>
        <p>Actor: {name}</p>
        <p>Role: {character}</p>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  name: PropTypes.string,
  charachter: PropTypes.string,
  propfile_path: PropTypes.string,
};
export default CastItem;
