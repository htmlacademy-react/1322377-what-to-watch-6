import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "../pages/main/main";
import SignInPage from "../pages/sign-in/sign-in";
import MyListPage from "../pages/my-list/my-list";
import FilmPage from "../pages/film/film";
import AddReviewPage from "../pages/add-review/add-review";
import PlayerPage from "../pages/player/player";
import NotFoundPage from "../pages/not-found-page/not-found-page";
import movieProp from "../types/movie.prop";

const SAME_MOVIES_COUNT = 4;

const App = ({movies}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage movies={movies} />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage movies={movies} />
        </Route>
        <Route exact path="/films/:id">
          <FilmPage movies={movies} sameMovies={movies.slice(0, SAME_MOVIES_COUNT)} />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage movie={movies[0]} />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage movie={movies[0]} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
};

export default App;
