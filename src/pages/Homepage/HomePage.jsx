import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <div className="homepage-content">
        <h1>Welcome to NZC Youth Camp</h1>
        <p>
          This is the official homepage of the NZC Youth Camp. Here you’ll find
          all the details, latest updates, and useful links.
        </p>
        {/* Add more homepage content as needed */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
