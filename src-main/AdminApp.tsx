import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrderManagement from "./component/pages/orderManagement/OrderManagement";
import ProductManagement from "./component/pages/productManagement/ProductManagement";
import MemberManagement from "./component/pages/memberManagement/MemberManagement";
import DashBoard from "./DashBoard";

const AdminApp: React.FC = () => {
  return (
    <Routes>
    {/* 기본 경로 설정 */}
    <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
    <Route path="/order-management" element={<OrderManagement />} />
    <Route path="/product-management" element={<ProductManagement />} />
    <Route path="/member-management" element={<MemberManagement />} />
    <Route path="/dashboard" element={<DashBoard/>} />
  </Routes>
  );
};

export default AdminApp;
