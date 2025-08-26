import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for redirect
import "./Login.css";
import bgImage from "./Background.png"; // background image

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy credentials
    if (email === "admin@swayamyou.com" && password === "1234") {
      setIsAuthenticated(true);
      navigate("/dashboard"); // redirect to dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",   // fills entire screen
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-card">
        <h1 className="logo">Swayamyou</h1>
        <h2>Sign In</h2>
        <p className="subtitle">Enter your credentials to access your account</p>

        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a href="#" className="forgot-password">Forgot password?</a>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
        <footer>© 2025 Swayamyou. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default Login;
