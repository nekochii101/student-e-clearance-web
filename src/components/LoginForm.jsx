import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAPI } from "../services/api";

import Logo from "../assets/img/occ-logo.png";
import "../styles/LoginForm.css";

function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();

  loginAPI
    .login({ email, password })
    .then((res) => {
      if (res.data?.success) {
        // user is authenticated on the backend (session is active)
        navigate("/admindashboard");
      } else {
        alert(res.data?.error || "Login failed");
      }
    })
    .catch((err) => {
      alert(err.response?.data?.error || "Login request failed");
    });
};


  return (
    <div className="login-opacity">
      <div className="login-container">
        <div className="login-content-a">
          <img src={Logo} className="logo-a" alt="Logo" />
          <h1 className="header-a">Student E-Clearance System</h1>
          <div className="recognition">
            <p className="recognition-cont">
              Developed by <b>Raffy Sabella, Rixjun Banawan</b> Designed by{" "}
              <b>Jonalyn Ihong, Christopher Rey Namoc</b>
              <i> © 2025 All Rights Reserved</i>
            </p>
          </div>
        </div>

        <div className="login-content-b">
          <h1 className="header">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="forms">
              <label className="f-label"
              >Email</label>
              <input
                type="email"
                className="inputs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label className="f-label">Password</label>
              <input
                type="password"
                className="inputs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="btn" type="submit">
                Log In
              </button>
            </div>
          </form>

          <div className="btn-action">
            <div className="divider">
              <hr />
              <b>or</b>
              <hr />
            </div>
            <button className="btn-transparent">Register Account</button>
            <div className="checkbox-cont">
              <input type="checkbox" className="checkbox" />
              <b className="tas">I agree to the terms and service</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
