import PropTypes from "prop-types";

export default {
  activeTab: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.element])),
};
