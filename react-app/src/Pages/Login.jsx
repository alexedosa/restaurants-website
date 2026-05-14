import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css"; // Reusing the same styles

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div
          className="auth-image"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212, 66, 17, 0.4), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000')",
          }}
        >
          <div className="auth-overlay">
            <blockquote>Welcome Back.</blockquote>
            <cite>Shalom's Kitchen</cite>
          </div>
        </div>
        <div className="auth-card">
          <div className="auth-header">
            <h2>
              Welcome <span className="highlight">Back</span>
            </h2>
            <p>Log in to your account to continue your royal feast.</p>
          </div>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="form-options">
              <Link
                to="/forgot-password"
                style={{ fontSize: "0.85rem", color: "var(--primary)" }}
              >
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="auth-btn">
              Sign In
            </button>
          </form>
          <div className="auth-footer">
            <p>
              Don't have an account? <Link to="/signup">Create One</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
