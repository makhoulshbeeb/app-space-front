import React, { useState } from "react";
import "./styles/Login.css";
import image from "../image/login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLoginMutation } from "../api/AuthApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password }).unwrap();
      localStorage.setItem("token", userData.token);
      console.log("User logged in:", userData);
    } catch (err) {
      console.error("Failed to login:", err);
    }
  };

  return (
    <div className="login-body">
      <div className="animated-circle"></div>
      <div className="auth_container">
        <div className="image_container">
          <img src={image} className="login_image" alt="background" />
        </div>
        <div className="auth_form">
          <p className="auth_title">Log In</p>
          <form onSubmit={handleLogin} className="login-form">
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
            <button type="submit" className="login_button" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && (
            <p className="error-message">Login failed. Please try again.</p>
          )}
          <div className="checking-account">
            <small>
              Already have an account? <b className="span">Register</b>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
