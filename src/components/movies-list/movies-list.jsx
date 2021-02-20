import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

import MovieCard from "../movie-card/movie-card";
import movieProp from "../../types/movie.prop";

const MoviesList = ({movies}) => {
  const [activeMovie, setActiveMovie] = useState(null);

  const handleMovieCardMouseOver = (movieId) => () => setActiveMovie(movieId);
  const handleMovieCardMouseLeave = () => setActiveMovie(null);

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={nanoid()}
          film={movie}
          handleMovieCardMouseOver={handleMovieCardMouseOver}
          handleMovieCardMouseLeave={handleMovieCardMouseLeave}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieProp),
};

export default MoviesList;
