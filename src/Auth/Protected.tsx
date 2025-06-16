import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, Outlet } from "react-router";

const Protected = () => {
  const { isAuthenticated, loading, logout } = useContext(AuthContext);

  useEffect(() => {
    const expiry = localStorage.getItem("expiry");
    if (expiry && Date.now() > parseInt(expiry)) {
      logout();
    }
  }, [isAuthenticated, loading, localStorage.getItem("expiry")]);

  if (loading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Protected;
