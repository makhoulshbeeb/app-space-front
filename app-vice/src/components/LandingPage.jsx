import React from "react";
import "./styles/LandingPage.css";
import { FaSearch } from "react-icons/fa";
import AppLogo from "../image/logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="background">
      <Navbar></Navbar>
      <div className="landing-page">
        <div className="text-section">
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
      <Footer></Footer>

    </div>

  );
};

export default LandingPage;
