import React, {useState} from 'react';
import {convertKebabToCamel, count} from "../../utils/common";
import RatingStar from "./components/rating-star/rating-star";

const MAX_RATING = 10;

const ReviewForm = () => {
  const initialFormState = {
    rating: `8`,
    reviewText: ``,
  };
  const [formState, setFormState] = useState(initialFormState);

  const onChange = (evt) => {
    const {name, value} = evt.target;
    setFormState((prevState) => ({
      ...prevState,
      [convertKebabToCamel(name)]: value,
    }));
  };

  return (
    <div className="add-review">
      <form className="add-review__form" onChange={onChange}>
        <div className="rating">
          <div className="rating__stars">
            {count(MAX_RATING).map((i) =>
              <RatingStar
                key={`star-${i + 1}`}
                value={i + 1}
                isChecked={+formState.rating === i + 1}
              />
            )}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
