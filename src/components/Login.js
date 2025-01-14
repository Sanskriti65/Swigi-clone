// src/components/Login.js
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [mobile, setMobile] = useState(""); // Changed to 'mobile'
  const [error, setError] = useState(""); // Error state for validation

  const handleLogin = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("Logged in with mobile:", mobile);
  };

  const handleCancel = () => {
    setMobile("");
    setError(""); 
  };

  return (
    <div>
      <form className="modal-form" onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            id="mobile"
            className="input-field"
            maxLength="10"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            autoComplete="off"
            required
          />
          <label htmlFor="mobile" className="input-label">
            Phone number
          </label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="login-button-wrapper">
          <button type="submit" className="login-button">
            Login
          </button>
        </div>

        

        <div className="terms-conditions">
          By clicking on Login, I accept the{" "}
          <a href="/terms-and-conditions" className="terms-link">
            Terms & Conditions
          </a>{" "}
          &{" "}
          <a href="/privacy-policy" className="privacy-link">
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
