import { useState, useEffect } from "react";
import { getTrending } from "../../services/themoviedb";
import MoviesList from "../../components/MoviesList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then((res) => setMovies(res.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
