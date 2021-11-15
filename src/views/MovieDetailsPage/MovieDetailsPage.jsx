import { useState, useEffect, lazy, Suspense } from "react";
import {
  Switch,
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import GoBackBtn from "../../components/GoBackBtn";
import MovieDetailedInfo from "../../components/MovieDetailedInfo";
import { getMovieInfo } from "../../services/themoviedb";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../../components/Cast" /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../../components/Reviews" /*webpackChunkName: "Reviews" */)
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    getMovieInfo(movieId).then((res) => setMovie(res));
  }, [movieId]);

  return (
    <>
      <GoBackBtn />
      {movie && <MovieDetailedInfo info={movie} />}
      <div className={s.flex}>
        {movieId && (
          <NavLink
            className={s.link}
            activeClassName={s.active}
            to={{
              pathname: `/movies/${movieId}/cast`,
              state: {...location.state}
            }}
          >
            Cast
          </NavLink>
        )}
        {movieId && (
          <NavLink
            className={s.link}
            activeClassName={s.active}
            to={{
              pathname: `/movies/${movieId}/reviews`,
               state: {...location.state}
            }}
          >
            Reviews
          </NavLink>
        )}
      </div>
      <Suspense fallback={<h1>LOADING....</h1>}>
        <Switch>
          <Route path={`${path}/cast`} exact>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`} exact>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
