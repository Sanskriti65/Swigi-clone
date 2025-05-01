import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = ({ toggleSidebar }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    email: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "mobile") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleKeyDown = (e) => {
    if (e.target.name === "mobile") {
      // Allow: backspace, delete, tab, escape, enter
      if ([8, 9, 27, 13, 46].includes(e.keyCode) ||
          // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
          (e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode)) ||
          // Allow: home, end, left, right
          (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
      }
      // Prevent if not a number
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.mobile.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (formData.name.trim().length < 3) {
      setError("Name should be at least 3 characters long.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    console.log("Signup data:", formData);
    navigate("/");

    setError("");
    toggleSidebar();
  };

  return (
    <div>
      <form className="modal-form" onSubmit={handleSignup}>
        {/* Phone Number Field */}
        <div className="input-group">
          <input
            type="tel"
            name="mobile"
            className="input-field"
            maxLength="10"
            value={formData.mobile}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            inputMode="numeric"
            required
          />
          <label htmlFor="mobile" className="input-label">
            Phone number
          </label>
        </div>

        {/* Name Field */}
        <div className="input-group">
          <input
            type="text"
            name="name"
            className="input-field"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="name" className="input-label">
            Name
          </label>
        </div>

        {/* Email Field */}
        <div className="input-group">
          <input
            type="email"
            name="email"
            className="input-field"
            value={formData.email}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="signup-button-wrapper">
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </div>

        <div className="terms-conditions">
          By creating an account, I accept the{" "}
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

export default Signup;