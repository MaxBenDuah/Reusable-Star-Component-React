import React, { useState } from "react";
import Star from "./Star";

const mainContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const starContainer = {
  display: "flex",
};

const textStyle = {
  fontSize: "24px",
  lineHeight: "1",
  margin: "0",
};

const StarRating = function ({
  maxRating = 5,
  color = "",
  size = 24,
  message = [],
  className = "",
  defaultRating = 5,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (ratingNum) => {
    setRating(ratingNum);
  };

  const handleTempRating = (ratingNum) => {
    setTempRating(ratingNum);
  };

  return (
    <div className={className} style={mainContainerStyle}>
      <div style={starContainer}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            onClick={() => handleRating(i + 1)}
            onMouseEnter={() => handleTempRating(i + 1)}
            onMouseLeave={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {message.length === maxRating
          ? message[tempRating ? tempRating - 1 : rating - 1]
          : tempRating
          ? tempRating
          : rating || ""}
      </p>
    </div>
  );
};

export default StarRating;
