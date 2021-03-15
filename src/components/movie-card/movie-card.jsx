import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import VideoPlayer from "../video-player/video-player";
import movieProp from '../../types/movie.prop';

const MovieCard = ({film, isActive, handleMovieCardMouseOver, handleMovieCardMouseLeave}) => {
  const {id, name, posterImage, videoLink} = film;
  const [shouldVideoPlay, setShouldVideoPlay] = useState(false);
  let timerId;

  const onVideoPlay = () => setShouldVideoPlay(() => true);
  const onVideoStop = () => {
    clearTimeout(timerId);
    setShouldVideoPlay(() => false);
  };

  useEffect(() => {
    if (isActive) {
      timerId = setTimeout(onVideoPlay, 1000);
    } else if (!isActive && shouldVideoPlay) {
      onVideoStop();
    }

    return () => clearTimeout(timerId);
  }, [isActive, shouldVideoPlay]);

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMovieCardMouseOver(id)}
      onMouseLeave={handleMovieCardMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer shouldVideoPlay={shouldVideoPlay} videoLink={videoLink} posterImage={posterImage} />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: movieProp.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleMovieCardMouseOver: PropTypes.func.isRequired,
  handleMovieCardMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
