import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Form from "../../Form";
import { getByQuery } from "../../services/themoviedb";
import MoviesList from "../../MoviesList";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const { pathname } = useLocation();
  const history = useHistory();

  const handleFormSubmit = (userQuery) => {
    setQuery(userQuery);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    history.push({
      pathname: pathname,
      search: `category=${query}`,
    });
    getByQuery(query).then((res) => setMovies(res.results));
  }, [query, history, pathname]);

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};
export default MoviesPage;
