import React from "react";
import AdminLayout from "./component/common/AdminLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import OrderManagement from "./component/pages/orderManagement/OrderManagement";
import ProductManagement from "./component/pages/productManagement/ProductManagement";
import MemberManagement from "./component/pages/memberManagement/MemberManagement";
import DashBoard from "./DashBoard";
import UserInfoTable from "./component/pages/memberManagement/UserInfoTable"; // UserInfoTable 추가
import SubAdminRegister from "./component/pages/memberManagement/SubAdminRegister";
import SubAdminAutorityManagement from "./component/pages/memberManagement/SubAdminAuthorityManagement";
import AuthoritySettings from "./component/pages/memberManagement/AuthoritySettings";
import PendingPayments from "./component/pages/orderManagement/PendingPayments";
import PreparingShipment from "./component/pages/orderManagement/PreparingShipment";
import WaitingShipment from "./component/pages/orderManagement/WaitingShipment";
import InTransit from "./component/pages/orderManagement/InTransit";
import CompletedDelivery from "./component/pages/orderManagement/CompletedDelivery";
import OrderDetails from "./component/pages/orderManagement/details/OrderDetails"
import CancelBeforePayment from "./component/pages/orderManagement/return/CancelBeforePayment";
import CancelManagement from "./component/pages/orderManagement/return/CancelManagement";
import ExchangeManagement from "./component/pages/orderManagement/return/ExchangeManagement";
import ReturnManagement from "./component/pages/orderManagement/return/ReturnManagement";
import RefundManagement from "./component/pages/orderManagement/return/RefundManagement";
import CardCancelInquiry from "./component/pages/orderManagement/return/CardCancelInquiry";
import AdminRefundManagement from "./component/pages/orderManagement/return/AdminRefundManagement";


const AdminApp: React.FC = () => {
  return (
  
      <Routes>
        {/* 기본 경로 설정 */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<DashBoard />} />
        <Route path="/sub-admin-register" element={<SubAdminRegister />} />
        <Route path="/sub-admin-authority-management" element={<SubAdminAutorityManagement />}/>
          {/* 부운영자 권한 설정 - ID로 이동 */}
        <Route
            path="/sub-admin-authority-management/:adminId"
            element={<AuthoritySettings />}
        />
        <Route path="order-management">
          <Route index element={<OrderManagement />} />
          {/* <Route path="past-orders" element={<PastOrders />} /> */}
          <Route path="pending-payments" element={<PendingPayments />} />
          <Route path="preparing-shipment" element={<PreparingShipment />} />
          <Route path="waiting-shipment" element={<WaitingShipment />} />
          <Route path="in-transit" element={<InTransit />} />
          <Route path="completed-delivery" element={<CompletedDelivery />} />
          <Route
            path="entire-orders/order-details/:id"
            element={<OrderDetails />}
          />
          <Route path="return-exchange">
            <Route
              path="cancel-before-payment"
              element={<CancelBeforePayment />}
            />
            <Route path="cancel-management" element={<CancelManagement />} />
            <Route
              path="exchange-management"
              element={<ExchangeManagement />}
            />
            <Route path="return-management" element={<ReturnManagement />} />
            <Route path="refund-management" element={<RefundManagement />} />
            <Route path="card-cancel-inquiry" element={<CardCancelInquiry />} />
            <Route
              path="admin-refund-management"
              element={<AdminRefundManagement />}
            />
          </Route>
        </Route>
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/member-management" element={<MemberManagement />} />
        <Route path="/user-management/list" element={<UserInfoTable />} /> {/* UserInfoTable 경로 추가 */}
      </Routes>

  );
};

export default AdminApp;
