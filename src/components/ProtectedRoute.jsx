import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext"; // Import the custom hook

const ProtectedRoute = ({ adminOnly, children }) => {
  // Get auth state from the context
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/user" replace />; // Redirect non-admin users to user panel
  }

  return children;
};

export default ProtectedRoute;
