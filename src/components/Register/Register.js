import React, { useState } from "react";
import "./Register.css"; // Make sure to create a RegisterPage.css file
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const body = {
      username: username,
      email: email,
      password: password,
      confirmed: true,
      role: 1,
    };

    try {
      const res = await axios.post(
        "https://sincere-hero-563078a6a4.strapiapp.com/api/users",
        body
      );
      navigate("/login");
    } catch (error) {
      console.error("Error during registration: ", error.res);
    }
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-logo">My blog</h1>
        <h2>Create new account</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          required
        />

        <button onClick={handleSubmit} className="continue-button">
          Continue
        </button>

        <div className="signin-redirect">
          <p>
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
