import React from 'react';
import {getFilmMarkString} from "../../../../utils/common";
import {MAX_STARRING_COUNT} from "../../../../const";

import propTypes from './movie-tab-overview.props';

const MovieTabOverview = (props) => {
  const {movie} = props;
  const {description, director, starring, rating, scoresCount} = movie;

  function getStarringString(starringArr) {
    if (starringArr.length > MAX_STARRING_COUNT) {
      return starringArr.slice(0, MAX_STARRING_COUNT).join(`, `) + ` and other`;
    }

    return starringArr.join(`, `);
  }

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmMarkString(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring">
          <strong>Starring: {getStarringString(starring)}</strong></p>
      </div>
    </>
  );
};

MovieTabOverview.propTypes = propTypes;

export default MovieTabOverview;
