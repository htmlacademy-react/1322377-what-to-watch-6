import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';

import {appStore} from "./store/reducer";

import App from './app/app';
import {generateFilms} from "./mock/movie";
import {loadMovies} from "./store/actions";

const FILMS_COUNT = 20;
const movies = generateFilms(FILMS_COUNT);

const store = createStore(appStore, composeWithDevTools());

Promise.resolve(store.dispatch(loadMovies(movies)))
  .then(() => {
    ReactDOM.render(
        <Provider store={store}>
          <App movies={movies} />
        </Provider>,
        document.getElementById(`root`),
    );
  });
