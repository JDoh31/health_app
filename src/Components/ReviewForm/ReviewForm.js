import React, { useEffect, useState } from 'react';
import './ReviewForm.css'; 
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [reviews, setReviews] = useState({}); // holds reviews by doctor index

  const getDoctors = () => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
      });
  };

  useEffect(() => {
    getDoctors();
  }, []);

  // Function to receive review from child component
  const handleReviewSubmit = (index, reviewData) => {
    setReviews(prev => ({
      ...prev,
      [index]: reviewData.review // or store full reviewData if needed
    }));
  };

  return (
    <div className='review-container'>
      <div className='review-grid'>
        <div className='review-text'>
          <h1>Reviews</h1>
        </div>
        <div className='review-table'>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>Provide Feedback</th>
                <th>Review Given</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{doctor.name}</td>
                  <td>{doctor.speciality}</td>
                  <td>
                    <GiveReviews
                      onSubmit={(data) => handleReviewSubmit(index, data)}
                      isSubmitted={!!reviews[index]} // pass boolean flag
                    />
                  </td>
                  <td>{reviews[index] || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
