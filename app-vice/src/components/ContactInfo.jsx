import React from 'react';
import './styles/ContactInfo.css';

const ContactInfo = ({ user }) => {
    return (
        <div className="contact-info">
            <div className="details-row">
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="details-row">
                <p><strong>Postal Code:</strong> {user.postalCode}</p>
                <p><strong>Country:</strong> {user.country}</p>
                <p><strong>City:</strong> {user.city}</p>
            </div>
        </div>
    );
};

export default ContactInfo;
