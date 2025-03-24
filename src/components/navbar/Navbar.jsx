import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

      {/* Right - Buttons & Toggle for Mobile */}
      <div className="navbar-right">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="navbar-button">Login</button>
          </Link>
          <Link to="/register" onClick={() => setMenuOpen(false)}>
            <button className="navbar-button">Register</button>
          </Link>
          <img src="/SYL-logo.png" alt="SYL Logo" className="navbar-logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
