import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivatedRoutes = ({ isAuthenticated, redirectPath = "/sign-in", children }) => {
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return (
    <div style={{ marginBottom: "70px" }}>
      <Outlet />
      {/* Puedes agregar aquí cualquier componente que desees mostrar en las rutas privadas, como un pie de página */}
    </div>
  );
};

export default PrivatedRoutes;

PrivatedRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};