import React from "react";
import "./styles/Login.css";
import image from "../../image/bg_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

const Auth = () => {
  return (
    <>
      <div className="animated-circle"></div>

      <div className="auth_container">
        <div className="image_container">
          <img src={image} className="image" alt="background" />
        </div>
        <div className="auth_form">
          <p className="auth_title">Sign up</p>
          <label>Name</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="email" placeholder="insert your name here.." />
          </div>
          <label>Email</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="email" placeholder="insert your email here.." />
          </div>
          <label>Password</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type="password" placeholder="insert your password here.." />
          </div>
          <label>Confirm Password</label>
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input type="password" placeholder="insert your password here.." />
          </div>
          <div className="checking">
            <div className="checkbox">
              <input type="checkbox" id="rememberMe" className="checkbox" />
              <label htmlFor="rememberMe" className="checkbox-label">
                Remember Me
              </label>
            </div>
          </div>
          <button className="login-button">Sign up</button>
          <div className="checking-account"></div>
        </div>
      </div>
    </>
  );
};

export default Auth;
