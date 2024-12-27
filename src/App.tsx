import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "../src/pages/MainPage";
import Login from "../src/components/common/Login";
import PrivateRoute from "./routes/PrivateRoutes";
import AdminMain from "../src-main/AdminMain";


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
              <AdminMain />
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
