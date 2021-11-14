import { useState, useEffect, lazy, Suspense } from "react";
import {
  Switch,
  Route,
  useParams,
  NavLink,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import GoBackBtn from "../../GoBackBtn";
import MovieDetailedInfo from "../../MovieDetailedInfo";
import { getMovieInfo } from "../../services/themoviedb";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import("../../Cast" /*webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../../Reviews" /*webpackChunkName: "Reviews" */)
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
              state: { from: location },
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
              state: { from: location },
            }}
          >
            Reviews
          </NavLink>
        )}
      </div>
      <Suspense fallback={<h1>LOADING....</h1>}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
