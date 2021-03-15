import React, {useState} from 'react';

import MovieCard from "../movie-card/movie-card";

import propTypes from './movies-list.props';

const MoviesList = ({movies}) => {
  const [activeMovie, setActiveMovie] = useState(null);

  const handleMovieCardMouseOver = (movieId) => () => setActiveMovie(movieId);
  const handleMovieCardMouseLeave = () => setActiveMovie(null);

  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          film={movie}
          isActive={movie.id === activeMovie}
          handleMovieCardMouseOver={handleMovieCardMouseOver}
          handleMovieCardMouseLeave={handleMovieCardMouseLeave}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = propTypes;

export default MoviesList;
