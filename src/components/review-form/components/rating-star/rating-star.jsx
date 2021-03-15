import React from 'react';

import propTypes from './rating-star.props';

const RatingStar = ({value, isChecked}) => (
  <>
    <input
      className="rating__input"
      id={`star-${value}`}
      type="radio"
      name="rating"
      value={value}
      defaultChecked={isChecked}
    />
    <label className="rating__label" htmlFor={`star-${value}`}>{`Rating ${value}`}</label>
  </>
);

RatingStar.propTypes = propTypes;

export default RatingStar;
