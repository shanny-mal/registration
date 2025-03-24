import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext"; // Make sure this path is correct
import HomePage from "./pages/Homepage/HomePage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import AdminPanel from "./pages/Admin/AdminPanel";
import UserPanel from "./pages/User/UserPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Admin panel - only accessible by admins */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute adminOnly>
                <AdminPanel />
              </ProtectedRoute>
            }
          />

          {/* User panel - accessible by all authenticated users */}
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserPanel />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
