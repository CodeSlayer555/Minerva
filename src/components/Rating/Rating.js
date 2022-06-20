import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import RatingStyle from "./Rating.module.css";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Rating = (props) => {
  const { setReviews, ratinghover } = props;
  const [currentValue, setCurrentValue] = setReviews;
  const ratingHover = ratinghover;
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(0);
  };
  return (
    <div className={RatingStyle["contain"]}>
      {[...Array(5)].map((_, index) => {
        if (ratingHover) {
          return (
            <FaStar
              key={index}
              size={24}
              color={currentValue > index ? colors.orange : colors.grey}
              style={{
                cursor: "pointer",
              }}
            />
          );
        } else {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                cursor: "pointer",
              }}
            />
          );
        }
      })}
    </div>
  );
};

export default Rating;
