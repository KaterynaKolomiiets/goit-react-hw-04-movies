import { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";

const HomePage = lazy(() =>
  import(
    "./views/HomePage" /*webpackChunkName: "HomePage" */
  )
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /*webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage" */
  )
);

function App() {

  return (
    <div className="App">
      <div className="container">
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Navigation />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route path="/movies">
              <MoviesPage />
            </Route>
            <Redirect to="/"/>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
