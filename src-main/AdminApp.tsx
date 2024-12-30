import React from "react";
import AdminLayout from "./component/common/AdminLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import OrderManagement from "./component/pages/orderManagement/OrderManagement";
import ProductManagement from "./component/pages/productManagement/ProductManagement";
import MemberManagement from "./component/pages/memberManagement/MemberManagement";
import DashBoard from "./DashBoard";
import UserInfoTable from "./component/pages/memberManagement/UserInfoTable"; // UserInfoTable 추가

const AdminApp: React.FC = () => {
  return (
    <AdminLayout>
           <Routes>
      {/* 기본 경로 설정 */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/order-management" element={<OrderManagement />} />
      <Route path="/product-management" element={<ProductManagement />} />
      <Route path="/member-management" element={<MemberManagement />} />
      <Route path="/user-management/list" element={<UserInfoTable />} /> {/* UserInfoTable 경로 추가 */}
    </Routes>
    </AdminLayout>
 
  );
};

export default AdminApp;
