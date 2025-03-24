import React from "react";
import Navbar from "../../components/navbar/Navbar";
import RegistrationCard from "./RegistrationCard";
import Footer from "../../components/footer/Footer";
import "../../App.css";

const RegistrationPage = () => {
  return (
    <div className="registration-container">
      <Navbar />
      <RegistrationCard />
      <Footer />
    </div>
  );
};

export default RegistrationPage;
