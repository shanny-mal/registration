import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left - Adventist Logo */}
      <div className="navbar-left">
        <img
          src="/adventist-logo.png"
          alt="Adventist Logo"
          className="navbar-logo"
        />
      </div>

      {/* Center - Title */}
      <div className="navbar-center">
        <h2 className="navbar-title">NZC Youth Camp Registration</h2>
      </div>

      {/* Right - SYL Logo */}
      <div className="navbar-right">
        <img src="/SYL-logo.png" alt="SYL Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
