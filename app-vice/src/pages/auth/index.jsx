import React from "react";
import "./style.css";
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
          <p className="auth_title">Log In</p>
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
          <div className="checking">
            <div className="checkbox">
              <input type="checkbox" id="rememberMe" className="checkbox" />
              <label htmlFor="rememberMe" className="checkbox-label">
                Remember Me
              </label>
            </div>
            <div>
              <p>Forgot password?</p>
            </div>
          </div>
          <button className="login-button">Login</button>
          <div className="checking-account">
            <small>
              Already have an account? <b className="span">Register</b>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
