import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="/adventist-logo.png"
          alt="Adventist Logo"
          className="navbar-logo"
        />
      </div>

      {/* Centered Content */}
      <div className="navbar-center">
        <h2 className="navbar-title">
          North Zimbabwe Conference Youth Camp Registration
        </h2>
        <h3 className="navbar-subtitle">CHINHOYI-CHEGUTU-HUKAMA</h3>
      </div>

      <div className="navbar-right">
        <img
          src="/SYL-logo.png"
          alt="SYL Logo"
          className="navbar-logo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
