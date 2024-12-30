import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  isAdminRoute?: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, isAdminRoute = false, children }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isAdminRoute && !localStorage.getItem("isAdminAuthenticated")) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
