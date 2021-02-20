import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import {generateFilms} from "./mock/movie";

const FILMS_COUNT = 20;

const movies = generateFilms(FILMS_COUNT);

ReactDOM.render(
    <App movies={movies} />,
    document.getElementById(`root`)
);
