import React from "react";
import "./styles/LandingPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import image from "../image/phone.png";
import robot from "../image/robot.png";
const LandingPage = () => {
  return (
    <div className="background">
      <Navbar />
      <div className="app-target">
        <b className="target-title">Explore</b>
        <p>Innovate</p>
        <p>Succeed</p>
      </div>
      <div className="main-features">
        <div className="app-features">
          <div className="upper-text">
            You’ve Reached the Right <br />
            Place to{" "}
            <span className="special-text">
              Create & Build <br />
              Your App!
            </span>
          </div>
          <div>
            Our AI-powered platform offers expert insights <br />
            and personalized recommendations to set <br />
            your app up for success.
          </div>
          <button className="go-button">Go</button>
        </div>
      </div>
      {/* <div className="land-image">
        <img src={image}></img>
      </div> */}
      <div className="robot-container">
        <img src={robot} className="robot"></img>
        <div className="app-features">
          <div className="robot-text">
            Unlock Your App's <br />
            Potential with <br />
            <span className="special-text">AI-Powered Insights</span>
          </div>
          <div>
            Our AI-powered platform offers expert insights <br />
            and personalized recommendations to set <br />
            your app up for success.
          </div>
          <button className="go-button">Go</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
