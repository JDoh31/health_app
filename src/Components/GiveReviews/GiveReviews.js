// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';

// Function component for giving reviews
function GiveReviews({ onSubmit, isSubmitted }) {
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
      onSubmit && onSubmit(formData);
      setFormData({ name: '', review: '', rating: 0 });
      setShowForm(false);
    } else {
      setShowWarning(true);
    }
  };

  if (isSubmitted) {
    return <button disabled>Review Submitted</button>;
  }

  return (
    <div>
      {!showForm ? (
        <button onClick={handleButtonClick}>Click Here</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Review</h2>
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="rating">Rating (1-5):</label>
            <input type='number' id="rating" name="rating" min={1} max={5} value={formData.rating} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}


export default GiveReviews;

