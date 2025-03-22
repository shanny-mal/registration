import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-date">
        <i className="bi bi-calendar-event-fill"></i> APRIL <br /> 17-21, 2025
      </div>
      <div className="footer-location">
        <i className="bi bi-geo-alt-fill"></i> MUTORANHANGA <br /> CAMPSITE,
        KAROI
      </div>
      <div className="footer-ay-logo">
        <img src="src/assets/AY-logo.png" alt="AY Logo" className="ay-logo" />
      </div>
      <div className="footer-powered">
        ©2025 Powered by Adventist Youth Ministries
      </div>
    </footer>
  );
};

export default Footer;
