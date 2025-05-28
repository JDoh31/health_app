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
    <div className='review-container'>
      <h1>Reviews</h1>
      <div className='review-title_row'>
        <h3>Serial Number</h3>
        <h3>Doctor Name</h3>
        <h3>Doctor Speciality</h3>
        <h3>Provide feedback</h3>
        <h3>Review Given</h3>
      </div>
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
    </div>

  );
};

export default ReviewForm;