import { lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

const HomePage = lazy(() =>
  import(
    "./components/views/HomePage/HomePage" /*webpackChunkName: "HomePage" */
  )
);
const MoviesPage = lazy(() =>
  import("./components/views/MoviesPage" /*webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./components/views/MovieDetailsPage" /*webpackChunkName: "MovieDetailsPage" */
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
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
