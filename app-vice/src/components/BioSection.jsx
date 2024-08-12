import React from 'react';
import './styles/BioSection.css';

const BioSection = ({ user }) => {
    return (
        <div className="bio-section">
            <h3>Bio</h3>
            <p>{user.bio}</p>
        </div>
    );
};

export default BioSection;
