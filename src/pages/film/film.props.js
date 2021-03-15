import PropTypes from "prop-types";
import movieProp from "../../types/movie.prop";

export default {
  movies: PropTypes.arrayOf(movieProp).isRequired,
  sameMovies: PropTypes.arrayOf(movieProp).isRequired,
};
