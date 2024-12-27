import React, { useState, useEffect } from "react";
import PrivateRoute from "../src/routes/PrivateRoutes";
import AdminApp from "./AdminApp";

const AdminMain: React.FC = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const storedAdminAuth = localStorage.getItem("isAdminAuthenticated");
    if (storedAdminAuth === "true") {
      setIsAdminAuthenticated(true);
    }
  }, []);

  return (
    <PrivateRoute isAuthenticated={isAdminAuthenticated} isAdminRoute>
      <AdminApp />
    </PrivateRoute>
  );
};

export default AdminMain;
