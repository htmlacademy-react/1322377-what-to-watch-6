import movieProp from "../../types/movie.prop";
import PropTypes from "prop-types";

export default {
  film: movieProp.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleMovieCardMouseOver: PropTypes.func.isRequired,
  handleMovieCardMouseLeave: PropTypes.func.isRequired,
};
