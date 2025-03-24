import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

      {/* Right - SYL Logo */}
      <div className="navbar-right">
        <img
          src="/SYL-logo.png" // SYL Logo path
          alt="SYL Logo"
          className="syl-logo"
        />
      </div>

      {/* Hamburger Menu Icon for mobile */}
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMenu}>
            <button className="navbar-button">Home</button>
          </Link>
          <Link to="/login" onClick={toggleMenu}>
            <button className="navbar-button">Login</button>
          </Link>
          <Link to="/register" onClick={toggleMenu}>
            <button className="navbar-button">Register</button>
          </Link>
          {isAuthenticated && (
            <button
              onClick={() => {
                logout(); // Log out the user
                toggleMenu(); // Close the mobile menu
              }}
              className="navbar-button"
            >
              Logout
            </button>
          )}
        </div>
      )}

      {/* Navbar Buttons for larger screens */}
      <div className="navbar-buttons">
        {!isAuthenticated ? (
          <>
            <Link to="/">
              <button className="navbar-button">Home</button>
            </Link>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="navbar-button">Register</button>
            </Link>
          </>
        ) : (
          <button onClick={logout} className="navbar-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
