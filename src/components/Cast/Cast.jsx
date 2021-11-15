import { getCast } from "../../services/themoviedb";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CastItem from "./CastItem/CastItem";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getCast(movieId).then((res) => setCast(res.cast));
  }, [movieId]);

  return (
    <ul>
      {cast &&
        cast.map((item) => <CastItem key={item.id} actor={item}></CastItem>)}
    </ul>
  );
};

export default Cast;
