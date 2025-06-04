import React, { useEffect, useState } from 'react';
import './ReviewForm.css'; // Import the CSS file for styling
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = () => {
  const [review, setReview] = useState('');
  const [doctors, setDoctors] = useState([]);

  const getDoctors = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            setDoctors(data);
        })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Review submitted:', review);
  };

  useEffect(()=> {
    getDoctors();
  })

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
                    {doctors.map((doctor, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{doctor.name}</td>
                        <td>{doctor.speciality}</td>
                        <td><GiveReviews/></td>
                        <td></td>
                    </tr>
                    ))}
                </table>
            </div>
        </div>
      </div>
    </>
  );
};

export default ReviewForm;