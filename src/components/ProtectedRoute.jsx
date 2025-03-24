import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, isAdmin, adminOnly, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/user" replace />; // Redirect non-admin users to user panel
  }

  return children;
};

export default ProtectedRoute;
