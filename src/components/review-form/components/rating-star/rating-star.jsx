import React from 'react';
import PropTypes from 'prop-types';

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

RatingStar.propTypes = {
  value: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default RatingStar;
