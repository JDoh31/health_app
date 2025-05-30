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
    <>
      <div className='review-container'>
        <div className='review-grid'>
            <div className='review-text'>
                <h1>Reviews</h1>
            </div>
            <div className='review-table'>
                <table>
                    <tr>
                        <th>Serial Number</th>
                        <th>Doctor Name</th>
                        <th>Doctor Speciality</th>
                        <th>Provide feedback</th>
                        <th>Review Given</th>
                    </tr>
                    <tr>
                        <td>null</td>
                        <td>null</td>
                        <td>null</td>
                        <td><button>Click Here</button></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className='review-form'>
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
        </div>
      </div>
    </>
  );
};

export default ReviewForm;