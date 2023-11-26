import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ text, path }) {
  return (
    <Link to={path} className="cta">
      {text}
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
};
