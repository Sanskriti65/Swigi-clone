import React from "react";
import "./Index.css"; // Add your navbar-specific CSS
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
            alt="Swiggy Logo"
            className="logo"
          />
          <div className="dropdown">
            <span>
              Other <i className="fas fa-chevron-down"></i>
            </span>
            <div className="dropdown-content">
              <a href="./Header">Location 1</a>
              <a href="./Header">Location 2</a>
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <a href="./Header" className="navbar-link">
            <i className="fas fa-briefcase"></i> Swiggy Corporate
          </a>
          <a href="./Header" className="navbar-link">
            <i className="fas fa-search"></i> Search
          </a>
          <a href="./Header" className="navbar-link">
            <i className="fas fa-tags"></i> Offers <span className="new-badge">NEW</span>
          </a>
          <a href="./Header" className="navbar-link">
            <i className="fas fa-question-circle"></i> Help
          </a>
          <a href="./Header" className="navbar-link">
            <i className="fas fa-user"></i> Sign In
          </a>
          <a href="./Header" className="navbar-link cart">
            <i className="fas fa-shopping-cart"></i> Cart <span className="cart-count">0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
