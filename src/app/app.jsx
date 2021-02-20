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
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/mylist" component={MyListPage} />
        <Route exact path="/films/:id" component={FilmPage} />
        <Route exact path="/films/:id/review" component={AddReviewPage} />
        <Route exact path="/player/:id" component={PlayerPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
