import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {nanoid} from "nanoid";
import classnames from "classnames";

import {Genre} from "../../const";
import {changeGenre} from "../../store/actions";

const GenresList = (props) => {
  const {activeGenre, onChangeGenre} = props;

  function handleChangeGenre(newGenre) {
    return (evt) => {
      evt.preventDefault();
      onChangeGenre(newGenre);
    };
  }

  return (
    <ul className="catalog__genres-list">
      {Object.values(Genre).map((genre) => (
        <li key={nanoid()} className={classnames(`catalog__genres-item`, {
          "catalog__genres-item--active": activeGenre === genre
        })}>
          <a
            href="#"
            className="catalog__genres-link"
            onClick={handleChangeGenre(genre)}
          >
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(newGenre) {
    dispatch(changeGenre(newGenre));
  }
});

export default connect(null, mapDispatchToProps)(GenresList);
