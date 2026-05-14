import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>
              Join the <span className="highlight">Shalom's Kitchen</span>
            </h2>
            <p>
              Create an account to unlock premium deals and faster checkout.
            </p>
          </div>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>
            <div className="form-options">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>I agree to the Terms &
                Privacy Policy
              </label>
            </div>
            <button type="submit" className="auth-btn">
              Create Account
            </button>
          </form>
          <div className="auth-footer">
            <p>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
        <div className="auth-image">
          <div className="auth-overlay">
            <blockquote>Welcome.</blockquote>
            <cite>Join us.</cite>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
