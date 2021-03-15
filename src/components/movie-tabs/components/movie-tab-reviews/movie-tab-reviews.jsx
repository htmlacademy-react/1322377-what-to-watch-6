import React from 'react';
import ReviewsCol from "./components/reviews-col/reviews-col";
import {nanoid} from "nanoid";
import Review from "./components/review/review";

function splitReviews(reviews) {
  const middle = Math.ceil(reviews.length / 2);

  return [reviews.slice(0, middle), reviews.slice(middle)];
}

const MovieTabReviews = (props) => {
  const {movie} = props;

  const dividedReviews = splitReviews(movie._reviews);

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

export default MovieTabReviews;
