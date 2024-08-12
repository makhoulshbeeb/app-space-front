import React, { useState } from "react";
import "./styles/SignUp.css";
import image from "../image/signup.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useRegisterMutation } from "../api/AuthApi";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, { isLoading, error }] = useRegisterMutation();
 const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userData = await register({username, name, email, password }).unwrap();
     navigate("");
      console.log("User registered:", userData);
    } catch (err) {
      console.error("Failed to register:", err);
    }
  };

  return (
    <div className="login-body">
      <div className="animated-circle"></div>
      <div className="auth_container">
        <div className="auth_form">
          <p className="auth_title">Sign up</p>
          <form onSubmit={handleSignup} className="login-form">
          <label>Username</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                placeholder="insert your username here.."
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <label>Name</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="text"
                placeholder="insert your name here.."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <label>Email</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input
                type="email"
                placeholder="insert your email here.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label>Password</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                placeholder="insert your password here.."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {/* <label>Confirm Password</label>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input
                type="password"
                placeholder="insert your password here.."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div> */}
            <div className="checking">
              <div className="checkbox">
                <input type="checkbox" id="rememberMe" className="checkbox" />
                <label htmlFor="rememberMe" className="checkbox-label">
                  Remember Me
                </label>
              </div>
            </div>
            <button type="submit" className="login_button" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign up"}
            </button>
          </form>
          {error && <p className="error-message">Signup failed. Please try again.</p>}
        </div>
        <div className="image_container">
          <img src={image} className="image" alt="background" />
        </div>
      </div>
      
    </div>
  );
};

export default Auth;
