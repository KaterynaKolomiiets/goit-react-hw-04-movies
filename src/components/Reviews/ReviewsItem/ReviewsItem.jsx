import s from "./ReviewsItem.module.css";
import ReactImageFallback from "react-image-fallback";
import fallbackImg from "../../img/fallback.png";
import PropTypes from "prop-types";

const ReviewsItem = ({
  props: {
    author,
    content,
    created_at,
    author_details: { avatar_path },
  },
}) => {
  const BASE_IMG = "https://image.tmdb.org/t/p/w200/";
  return (
    <li className={s.card}>
      <ReactImageFallback
        className={s.avatar}
        src={`${BASE_IMG}${avatar_path}`}
        fallbackImage={fallbackImg}
      />
      <h2 className={s.header}>{author}</h2>
      <p className={s.p}>{content}</p>
      <span className={s.time}>{created_at}</span>
    </li>
  );
};

ReviewsItem.propTypes = {
  autor: PropTypes.string,
  content: PropTypes.string,
  created_at: PropTypes.string,
  avatar_path: PropTypes.string,
};
export default ReviewsItem;
