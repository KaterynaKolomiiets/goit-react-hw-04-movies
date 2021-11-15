import s from "./ReviewsItem.module.css";
import PropTypes from "prop-types";

const ReviewsItem = ({
  props: {
    author,
    content,
    created_at,
  },
}) => {
  return (
    <li className={s.card}>
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
