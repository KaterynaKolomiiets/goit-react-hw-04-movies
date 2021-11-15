import s from "./CastItem.module.css";
import fallbackImg from "../../img/fallback.png";
import PropTypes from "prop-types";

const CastItem = ({ actor: { name, character, profile_path } }) => {
  let path = profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : fallbackImg;
  return (
    <li className={s.card}>
      <img alt={name} className={s.img} src={path} />

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
