import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import MainPage from "../pages/main/main";
import SignInPage from "../pages/sign-in/sign-in";
import MyListPage from "../pages/my-list/my-list";
import FilmPage from "../pages/film/film";
import AddReviewPage from "../pages/add-review/add-review";
import PlayerPage from "../pages/player/player";
import NotFoundPage from "../pages/not-found-page/not-found-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <Route exact path="/mylist">
          <MyListPage />
        </Route>
        <Route exact path="/films/:id">
          <FilmPage />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReviewPage />
        </Route>
        <Route exact path="/player/:id">
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
