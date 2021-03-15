import React from "react";

import propTypes from './reviews-col.props';

const ReviewsCol = (props) => {
  return <div className="movie-card__reviews-col">
    {props.children}
  </div>;
};

ReviewsCol.propTypes = propTypes;

export default ReviewsCol;
