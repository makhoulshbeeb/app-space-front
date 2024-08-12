import React from 'react';
import './styles/ContactUs.css';
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
    <div className="contact-us-container">
      <div className="contact-content">
        <div className="contact-illustration-text">
          <div className="contact-illustration">
            <img src={require('../image/Getintouch.png')} alt="Get in Touch Illustration" />
          </div>
          <div className="contact-heading">
            <h2>Get in Touch</h2>
            <p>We’re here to help! Whether you have a question, need assistance, or want to share your feedback, please reach out to us.</p>
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="First Name" className="form-input" />
            <input type="text" placeholder="Last Name" className="form-input" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" className="form-input" />
            <input type="text" placeholder="Phone Number" className="form-input" />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-textarea"></textarea>
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-submit">Send</button>
            <button type="reset" className="btn-reset">Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
    
    </>
  );
};

export default ContactUs;
