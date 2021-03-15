import React from "react";
import PropTypes from "prop-types";

import {MovieTab} from "../../pages/film/film";

const getTabStyles = (isActive) => {
  const styles = [`movie-nav__item`];
  if (isActive) {
    styles.push(`movie-nav__item--active`);
  }
  return styles.join(` `);
};

const MovieTabs = ({activeTab, onChange, children}) => {
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(MovieTab).map((tab) => (
            <li className={getTabStyles(tab === activeTab)} key={`tab-${tab}`}>
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                onChange(tab);
              }}>{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
};

MovieTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.element])),
};

export default MovieTabs;
