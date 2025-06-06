import React, { useState } from 'react';
import './Rating.css'; // Import the CSS file for styling

const Rating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="rating">
      {[...Array(maxRating)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <span
              className={`star ${ratingValue <= rating ? 'filled' : ''}`}
            >
              ★
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Rating;