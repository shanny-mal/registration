import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"
import "./UserPanel.css";

const UserPanel = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Replace with your endpoint to fetch user-specific data.
    const userEmail = localStorage.getItem("userEmail");
    axios
      .get(`http://127.0.0.1:8000/api/register/?email=${userEmail}`)
      .then((response) => {
        // Assuming API returns an array; pick the first record
        setUserData(response.data[0]);
      })
      .catch((error) => {
        console.error(
          "Error fetching user registration details:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  if (!userData) {
    return (
      <div className="user-panel-container">
        <Navbar />
        <div className="user-content">
          <h2>Loading your registration details...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="user-panel-container">
      <Navbar />
      <div className="user-content">
        <h2>Your Registration Details</h2>
        <ul>
          <li>
            <strong>First Name:</strong> {userData.first_name}
          </li>
          <li>
            <strong>Surname:</strong> {userData.surname}
          </li>
          <li>
            <strong>Email:</strong> {userData.email}
          </li>
          <li>
            <strong>Sex:</strong> {userData.sex}
          </li>
          <li>
            <strong>Date of Birth:</strong> {userData.dob}
          </li>
          <li>
            <strong>Church:</strong> {userData.church}
          </li>
          <li>
            <strong>District:</strong> {userData.district}
          </li>
          <li>
            <strong>Federation:</strong> {userData.federation}
          </li>
          <li>
            <strong>Status:</strong> {userData.status}
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default UserPanel;
