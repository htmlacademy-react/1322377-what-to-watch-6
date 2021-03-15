import React from "react";
import PropTypes from 'prop-types';

const ReviewsCol = (props) => {
  return <div className="movie-card__reviews-col">
    {props.children}
  </div>;
};

ReviewsCol.propTypes = {
  children: PropTypes.element,
};

export default ReviewsCol;
