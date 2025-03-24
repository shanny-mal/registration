import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

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

      {/* Right - Buttons and Hamburger Menu */}
      <div className="navbar-right">
        <div className="navbar-buttons">
          {/* Show buttons based on authentication status */}
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
      </div>
    </nav>
  );
};

export default Navbar;
