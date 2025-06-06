import React from 'react';
import './ProfileCard.css'; // Import the CSS file for styling

const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <img src={user.avatar} alt={`${user.name}'s avatar`} className="profile-avatar" />
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
        </div>
    );
};

export default ProfileCard;