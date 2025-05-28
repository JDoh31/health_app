import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file for styling

const ReviewForm = () => {
  const [review, setReview] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Review submitted:', review);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="review">Your Review:</label>
      <textarea
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;