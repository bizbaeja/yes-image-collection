import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import OrderManagement from "./component/pages/orderManagement/OrderManagement";
import ProductManagement from "./component/pages/productManagement/ProductManagement";
import MemberManagement from "./component/pages/memberManagement/MemberManagement";

const AdminApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/order-management" replace />} />
      <Route path="/order-management" element={<OrderManagement />} />
      <Route path="/product-management" element={<ProductManagement />} />
      <Route path="/member-management" element={<MemberManagement />} />
    </Routes>
  );
};

export default AdminApp;
