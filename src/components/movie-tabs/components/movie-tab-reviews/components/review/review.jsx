import React from "react";
import moment from "moment";

import propTypes from './review.props';

const Review = (props) => {
  const {review} = props;
  const {rating, comment, user, date} = review;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{moment(date).format(`MMMM DD, YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = propTypes;

export default Review;
