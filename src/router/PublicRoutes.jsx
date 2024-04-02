import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ isAuthenticated, redirectPath = "/home", children }) => {
  if (isAuthenticated) return <Navigate to={redirectPath} />;
  return <Outlet />;
};

export default PublicRoutes;