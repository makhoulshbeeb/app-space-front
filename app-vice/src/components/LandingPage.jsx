import React from "react";
import "./styles/LandingPage.css";
import { FaSearch } from "react-icons/fa";
import AppLogo from "../../image/AppLogo.svg";

const LandingPage = () => {
  return (
    <div className="background">
      <div className="landing-page">
        <div>
          <div className="navbar-container">
            <nav className="navbar">
              <div className="logo-li">
                <div className="logo">
                  <img className="logo-img" src={AppLogo} alt="App logo" />
                </div>
                <ul className="nav-links">
                  <li>Home</li>
                  <li>Discover</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="search-login-signup">
                <FaSearch className="search-icon" />

                <button className="signup-button">Sign Up</button>
              </div>
            </nav>
          </div>

          <div className="text-section">
            <div className="explore-txt">
              <h1 className="explore">
                Explore
                <br />
                Innovate
                <br />
                Succeed
              </h1>
            </div>
            <div>
              <p className="subtitle">
                You’ve Reached the Right <br /> Place to{" "}
                <span className="highlight">
                  Create & Build <br /> Your App!
                </span>
              </p>
            </div>
            <div>
              <p className="description">
                Our AI-powered platform offers expert insights <br /> {"  "} and
                personalized recommendations to set
                <br /> your app up for success!
              </p>
            </div>
            <button className="join-button">Join</button>
          </div>
        </div>
        <div className="image-section"></div>

        <footer className="footer"></footer>
      </div>
    </div>
  );
};

export default LandingPage;
