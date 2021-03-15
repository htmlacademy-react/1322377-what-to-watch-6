import React from "react";

const ReviewsCol = (props) => {
  return <div className="movie-card__reviews-col">
    {props.children}
  </div>;
};

export default ReviewsCol;
