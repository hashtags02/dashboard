import React from "react";
import "./styles.css"; // ✅ keep your styles here

const Login = () => {
  return (
    <div className="container">
      <h1 className="logo">Swayamyou</h1>
      <div className="login-card">
        <h2>Sign In</h2>
        <p className="subtitle">Enter your credentials to access your account</p>

        <form>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <div className="divider">or</div>

          <button type="button" className="google-btn">
            Continue with Google
          </button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
      <footer>© 2025 Swayamyou. All rights reserved.</footer>
    </div>
  );
};

export default Login;
