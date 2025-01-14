import React, { useState } from "react";
import "./SidePanelWithForm.css";
import Login from "./Login";
import Signup from "./signup";

const SidePanel = ({ isOpen, toggleSidebar }) => {
  const [mode, setMode] = useState("login"); 

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`modal-container ${isOpen ? "open" : ""}`}>
        <div className="modal-content">
          <span className="icon-close" onClick={toggleSidebar}>
            ✖
          </span>
          <div className="modal-header">
            <div className="flex-col">
              <div className="modal-title">
                {mode === "login" ? "Login" : "Signup"}
              </div>
              <div className="modal-or-create">
                or{" "}
                <a
                  href="#"
                  className="create-account-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMode();
                  }}
                >
                  {mode === "login" ? "create an account" : "login"}
                </a>
              </div>
            </div>
            <img
              className="modal-image"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              alt="Modal illustration"
              width="110"
              height="110"
            />
          </div>

          {mode === "login" ? <Login /> : <Signup />}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
