import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

import MovieCard from "../movie-card/movie-card";
import movieProp from "../../types/movie.prop";

const MoviesList = ({movies}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <MovieCard key={nanoid()} film={movie} />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
};

export default MoviesList;
