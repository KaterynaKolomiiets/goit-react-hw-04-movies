import { getReviews } from "../services/themoviedb";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewsItem from "./ReviewsItem";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then((res) => setReviews(res.results));
  }, [movieId]);

  return (
    <ul>
      {/* {reviews &&
        reviews.map((item) => <ReviewsItem key={item.id} props={item} />)} */}
      {reviews.length === 0 ? <h1 className="noReviewsHeader">No reviews yet. Wanna be the first one to write something?</h1> : reviews.map((item) => <ReviewsItem key={item.id} props={item} />) }
    </ul>
  );
};

export default Reviews;
