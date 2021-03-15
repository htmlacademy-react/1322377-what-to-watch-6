import React from 'react';
import moment from "moment";

import {getDurationString} from "../../../../utils/common";
import movieProp from '../../../../types/movie.prop';

const MovieTabDetails = ({movie}) => {
  const {director, starring, genre, releaseDate, runTime} = movie;
  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((item, i) => <span key={`star-${i}`}>{item} {i === starring.length - 1 && <br />}</span>)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getDurationString(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{moment(releaseDate).format(`YYYY`)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

MovieTabDetails.propTypes = {
  movie: movieProp,
};

export default MovieTabDetails;
