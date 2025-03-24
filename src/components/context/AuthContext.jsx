import React, { createContext, useContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to provide auth context to the app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("authToken")
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const login = (authToken, adminStatus) => {
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("isAdmin", adminStatus);
    setIsAuthenticated(true);
    setIsAdmin(adminStatus);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
