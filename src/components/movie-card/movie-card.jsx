import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import movieProp from '../../types/movie.prop';

const MovieCard = ({film, handleMovieCardMouseOver, handleMovieCardMouseLeave}) => {
  const {id, name, posterImage} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMovieCardMouseOver(id)}
      onMouseLeave={handleMovieCardMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={posterImage} alt={name} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: movieProp.isRequired,
  handleMovieCardMouseOver: PropTypes.func.isRequired,
  handleMovieCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
