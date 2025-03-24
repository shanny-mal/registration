import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    // Fetch all registrations. Ensure your backend API is secured for admins.
    axios
      .get("http://127.0.0.1:8000/api/register/")
      .then((response) => {
        setRegistrations(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching registrations:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div className="admin-panel-container">
      <Navbar />
      <div className="admin-content">
        <h2>Admin Panel</h2>
        <table className="registration-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Sex</th>
              <th>DOB</th>
              <th>Church</th>
              <th>District</th>
              <th>Federation</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg) => (
              <tr key={reg.id}>
                <td>{reg.id}</td>
                <td>{reg.first_name}</td>
                <td>{reg.surname}</td>
                <td>{reg.email}</td>
                <td>{reg.sex}</td>
                <td>{reg.dob}</td>
                <td>{reg.church}</td>
                <td>{reg.district}</td>
                <td>{reg.federation}</td>
                <td>{reg.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
