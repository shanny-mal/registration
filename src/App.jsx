import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import AdminPanel from "./pages/Admin/AdminPanel";
import UserPanel from "./pages/User/UserPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  // For simplicity, we use localStorage for auth status.
  const isAuthenticated = localStorage.getItem("authToken");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<RegistrationPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated && isAdmin}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserPanel />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
