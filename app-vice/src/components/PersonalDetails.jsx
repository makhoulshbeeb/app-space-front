import React from 'react';
import './styles/PersonalDetail.css';

const PersonalDetails = ({ user }) => {
    return (
        <div className="personal-details">
            <h3>Personal Details</h3>
            <div className="details-row">
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
            </div>
            <div className="details-row">
                <p><strong>Date of Birth:</strong> {user.dob}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
            </div>
        </div>
    );
};

export default PersonalDetails;
