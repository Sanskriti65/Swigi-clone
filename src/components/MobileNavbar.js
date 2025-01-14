import React from "react";
import "./MobileNavbar.css";
import { Link } from "react-router-dom";


const MobileNavbar = () => {
  return (
    <nav className="bottom-navbar">
      <div className="nav-item">
        <i className="fas fa-home"></i>
        <Link to ="./Home">
        <span>Home</span>
        </Link>
      </div>
      <div className="nav-item">
        <i className="fas fa-th-large"></i>
        <span>Categories</span>
      </div>
      <div className="nav-item">
        <i className="fas fa-shopping-cart"></i>
        <span>Cart</span>
      </div>
      <div className="nav-item">
      <i className="fas fa-user"></i>
      <Link to ="./Login">
        <span>Account</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNavbar;