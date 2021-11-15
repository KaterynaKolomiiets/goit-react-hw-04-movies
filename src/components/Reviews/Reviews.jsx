import { getReviews } from "../../services/themoviedb";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewsItem from "./ReviewsItem";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then((res) => setReviews(res.results))
  }, []);
  let items;
  const handler =() => reviews.length ? items = reviews.map((item) => <ReviewsItem key={item.id} props={item} />) : items = <h1>No available reviews yet</h1>

setTimeout(handler, 0)
  return (
    <ul>
      {items ? items : ''}
    </ul>
  );
};

export default Reviews;
