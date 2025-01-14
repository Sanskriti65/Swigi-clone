// Signup.js
import React from "react";
import "./SidePanelWithForm.css";
import "./signup.css";

const Signup = () => {
  return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    <form className="modal-form">
      <div className="input-group">
        <input
          type="text"
          name="name"
          id="name"
          className="input-field"
          autoComplete="off"
          required
        />
        <label htmlFor="name" className="input-label">
          Full Name
        </label>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    <div className="container1">
      {/* Left floating images */}
      {/* <div className="images left">
        <img src="Pav Bhaji.avif" alt="Image 1" />
        <img src="Pastry.avif" alt="Image 2" />
        <img src="Kebab.avif" alt="Image 3" />
      </div> */}

      <div className={`wrapper ${isSignUp ? 'animated-signup' : 'animated-signin'}`}>
        {/* Sign-Up Form */}
        {isSignUp && (
          <div className="form-container sign-up">
            <form>
              <h2>Sign Up</h2>
              <div className="form-group">
                <input type="text" required />
                <FontAwesomeIcon icon={faUser} />
                <label>Username</label>
              </div>
              <div className="form-group">
                <input type="email" required />
                <FontAwesomeIcon icon={faAt} />
                <label>Email</label>
              </div>
              <div className="form-group">
                <input type="password" required />
                <FontAwesomeIcon icon={faLock} />
                <label>Password</label>
              </div>
              <div className="form-group">
                <input type="password" required />
                <FontAwesomeIcon icon={faLock} />
                <label>Confirm Password</label>
              </div>
              <button type="submit" className="btn">Sign Up</button>
              <div className="link">
                <p>
                  You already have an account?
                  <button type="button" onClick={toggleForm} className="signin-link"> Sign In</button>
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Sign-In Form */}
        {!isSignUp && (
          <div className="form-container sign-in">
            <form>
              <h2>Login</h2>
              <div className="form-group">
                <input type="text" required />
                <FontAwesomeIcon icon={faUser} />
                <label>Username</label>
              </div>
              <div className="form-group">
                <input type="password" required />
                <FontAwesomeIcon icon={faLock} />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="./">Forgot password?</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="link">
                <p>
                  Don't have an account?
                  <button type="button" onClick={toggleForm} className="signup-link"> Sign Up</button>
                </p>
              </div>
            </form>
          </div>
        )}
>>>>>>> Stashed changes
      </div>

      <div className="input-group">
        <input
          type="tel"
          name="mobile"
          id="mobile"
          className="input-field"
          maxLength="10"
          autoComplete="off"
          required
        />
        <label htmlFor="mobile" className="input-label">
          Phone number
        </label>
      </div>

      <div className="input-group">
        <input
          type="email"
          name="email"
          id="email"
          className="input-field"
          autoComplete="off"
          required
        />
        <label htmlFor="email" className="input-label">
          Email
        </label>
      </div>

      <div className="login-button-wrapper">
        <button type="submit" className="login-button">
          Signup
        </button>
      </div>

      <div className="terms-conditions">
        By clicking on Signup, I accept the{" "}
        <a href="/terms-and-conditions" className="terms-link">
          Terms & Conditions
        </a>{" "}
        &{" "}
        <a href="/privacy-policy" className="privacy-link">
          Privacy Policy
        </a>
      </div>
    </form>
  );
};

export default Signup;