// src/components/Login.js
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = ({ toggleSidebar }) => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setMobile(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("Logged in with mobile:", mobile);
    localStorage.setItem("isAuthenticated", "true");
    toggleSidebar();
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
            onChange={handleMobileChange}
            onKeyDown={(e) => {
              if (!/[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|Tab/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const paste = (e.clipboardData || window.clipboardData).getData('text');
              if (!/^\d+$/.test(paste)) {
                e.preventDefault();
              }
            }}
            autoComplete="off"
            inputMode="numeric"
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