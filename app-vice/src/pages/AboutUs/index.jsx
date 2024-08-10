import React from "react";
import image from "../../image/mission.png";
import "./style.css";
const AboutUs = () => {
  return (
    <div className="about_body">
      <h2 className="h2">Get to Know Us</h2>
      <div className="about_container">
        <div className="about_card">
          <div className="missions">
            <h2 className="mission_h2">Our Mission</h2>
            <p className="mission_text">
              Our mission is to empower individuals and small businesses to
              easily create successful applications by providing user-friendly
              tools, AI-driven insights, and market analysis. We strive to make
              app development accessible to everyone, helping turn ideas into
              reality
            </p>
          </div>
          <div className="about_image">
            <img src={image} alt="mission" className="image_about" />
          </div>
        </div>
        <div className="about_card">
          <div className="about_image">
            <img src={image} alt="mission" className="image_about" />
          </div>
          <div className="missions">
            <h2 className="story_h2">Our Story</h2>
            <p className="story_text">
              Our vision is to become the go-to platform for accessible and
              innovative app development, empowering individuals and small
              businesses to transform their ideas into impactful applications.
              We aspire to create a world where anyone, regardless of their
              technical background, can confidently develop and launch
              successful apps that stand out in the competitive market. By
              providing advanced tools, AI-driven insights, and a supportive
              community, we aim to foster creativity, drive innovation, and make
              app development a seamless and rewarding experience for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
