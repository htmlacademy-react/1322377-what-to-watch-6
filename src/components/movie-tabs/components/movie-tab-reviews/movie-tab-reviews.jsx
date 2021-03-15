import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from "nanoid";

import ReviewsCol from "./components/reviews-col/reviews-col";
import Review from "./components/review/review";
import reviewProp from "../../../../types/review.prop";

function splitReviews(reviews) {
  const middle = Math.ceil(reviews.length / 2);

  return [reviews.slice(0, middle), reviews.slice(middle)];
}

const MovieTabReviews = (props) => {
  const {reviews} = props;

  const dividedReviews = splitReviews(reviews);

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        {dividedReviews.map((reviewsPartArr) => <ReviewsCol key={nanoid()}>
          {reviewsPartArr.map((review) => <Review key={nanoid()} review={review}/>)}
        </ReviewsCol>)}
      </div>
    </>
  );
};

MovieTabReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default MovieTabReviews;
