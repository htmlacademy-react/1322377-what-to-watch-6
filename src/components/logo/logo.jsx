import React from 'react';
import PropTypes from 'prop-types';

const getLogoStyles = (isLight) => {
  const style = [`logo__link`];
  if (isLight) {
    style.push(`logo__link--light`);
  }

  return style.join(` `);
};

const Logo = ({isLight}) => (
  <div className="logo">
    <a href="/" className={getLogoStyles(isLight)}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </a>
  </div>
);

Logo.propTypes = {
  isLight: PropTypes.bool,
};

export default Logo;
