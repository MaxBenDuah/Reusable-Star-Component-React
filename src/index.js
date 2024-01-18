import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./components/StarRating";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  message: PropTypes.array,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      // maxRating={10}
      color="#65a30d"
      size={32}
      message={["Terrible", "Okay", "Good", "Very Good", "Excellent"]}
      className="test"
      defaultRating={3}
    />
    <StarRating maxRating={10} color="#be185d" size={42} />
    <StarRating maxRating={10} color="#6b21a8" size={24} />
  </React.StrictMode>
);
