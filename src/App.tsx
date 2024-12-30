import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import Login from "./auth/Login"; // Ensure this path is correct and the file exists
import PrivateRoute from "./auth/PrivateRoute";
import AdminApp from "../src-main/AdminApp"


const App: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("isAuthenticated");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} isAdminRoute>
              <AdminApp />
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
