import React from 'react';
import './styles/ProfileCard.css';

const ProfileCard = ({ user }) => {
    return (
        <div className="profile-card">
            <div className="profile-picture">
                <img src="profile_picture_url" alt="Profile" />
            </div>
            <div className="profile-info">
                <h2>{user.name}</h2>
            </div>
        </div>
    );
};

export default ProfileCard;
