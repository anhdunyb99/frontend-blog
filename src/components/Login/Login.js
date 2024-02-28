// LoginPage.js
import React, { useEffect, useState } from "react";
import "./Login.css"; // Make sure to create a LoginPage.css file for styling
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLoginContext } from "../../Context/LoginContext";
const natureImage =
  "https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww";

const Login = () => {
  const navigate = useNavigate();
  const { isLogin, setLogin } = useLoginContext();
  useEffect(() => {
    setLogin(true);
  });

  const handleRegister = () => {
    navigate("/register");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      identifier: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://sincere-hero-563078a6a4.strapiapp.com/api/auth/local",
        loginData
      );
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error.response.data);
    }
  };
  return (
    <div className="login-page">
      <div className="ad-section">
        <img src={natureImage} alt="Nature" className="ad-image" />
      </div>
      <div className="login-section">
        <div className="login-container">
          <h1 className="login-logo">Sign in</h1>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit" className="login-button">
              Login
            </button>
            <div className="login-options">
              <label className="checkbox-label">
                <input type="checkbox" className="checkbox" />
                Stay signed in
              </label>
              <a href="/forgot" className="forgot-link">
                Forgot username?
              </a>
            </div>

            <button
              type="button"
              onClick={handleRegister}
              className="create-account"
            >
              Create an account
            </button>
            <p className="or">Or, continue with</p>
            <button type="button" className="google-signin">
              Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
