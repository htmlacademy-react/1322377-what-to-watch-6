import PropTypes from "prop-types";
import reviewProp from "../../../../types/review.prop";

export default {
  reviews: PropTypes.arrayOf(reviewProp),
};
