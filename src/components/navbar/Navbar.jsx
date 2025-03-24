import React from "react";
import { Link } from "react-router-dom";
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

      {/* Center - Title & Subtitle */}
      <div className="navbar-center">
        <h2 className="navbar-title">NZC Youth Camp Registration</h2>
        <h3 className="navbar-subtitle">CHINHOYI-CHEGUTU-HUKAMA</h3>
      </div>

      {/* Right - Buttons and SYL Logo */}
      <div className="navbar-right">
        <Link to="/login">
          <button className="navbar-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="navbar-button">Register</button>
        </Link>
        <img src="/SYL-logo.png" alt="SYL Logo" className="navbar-logo" />
      </div>
    </nav>
  );
};

export default Navbar;
