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
import ProductList from "./component/pages/productManagement/listup/ProductList";
import AdminRegister from "./component/pages/productManagement/register/AdminRegister";
import VendorRegister from "./component/pages/productManagement/register/VendorRegister";
import BulkRegister from "./component/pages/productManagement/register/BulkRegister";
import CategoryManagement from "./component/pages/productManagement/category/CategoryManagement";
import RegionalRegister from "./component/pages/productManagement/register/RegionalRegister";
import SpecialCategory from "./component/pages/productManagement/category/SpecialCategory";
import MonthlyCategory from "./component/pages/productManagement/category/MonthlyCategory";
import BrandCategory from "./component/pages/productManagement/category/BrandCategory";
import BizShopCategory from "./component/pages/productManagement/category/BizShopCategory";
import ExhibitionCategory from "./component/pages/productManagement/category/ExhibitionCategory";
import FlowerDeliveryCategory from "./component/pages/productManagement/category/FlowerDeliveryCategory";
import NiceShopCategory from "./component/pages/productManagement/category/NiceShopCategory";
import ProductApprovalManagement from "./component/pages/productManagement/category/ProductApprovalManagement";
import MainProductApprovalManagement from "./component/pages/productManagement/category/MainProductApprovalManagement";
import ModifyProductRegistrationForm from "./component/pages/productManagement/register/ModifyProductRegistrationForm";

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
        <Route path="product-management">
          <Route index element={<ProductList />} />
          <Route path="product-list" element={<ProductList />} />
          {/* <Route path="admin-products" element={<AdminProduct />} />
          <Route path="vendor-products" element={<VendorProducts />} /> */}
          <Route path="admin-register" element={<AdminRegister />} />
          <Route path="vendor-register" element={<VendorRegister />} />
          <Route path="bulk-register" element={<BulkRegister title={""} />} />
          <Route  path="edit/:id" element={<ModifyProductRegistrationForm title={""}/>}/>
          <Route path="category" element={<CategoryManagement />} />
          <Route path="regional-register" element={<RegionalRegister />} />
          <Route path="special-category" element={<SpecialCategory />} />
          <Route path="monthly-category" element={<MonthlyCategory />} />
          <Route path="brand-category" element={<BrandCategory />} />
          <Route path="bizshop-category" element={<BizShopCategory />} />
          <Route path="exhibition-category" element={<ExhibitionCategory />} />
          <Route path="flower-category" element={<FlowerDeliveryCategory />} />
          <Route path="nice-shop-category" element={<NiceShopCategory />} />
          <Route path="approval-management">
            <Route index element={<ProductApprovalManagement />} />
            <Route path="main" element={<MainProductApprovalManagement />} />
          </Route>
        </Route>
        <Route path="/member-management" element={<MemberManagement />} />
        <Route path="/user-management/list" element={<UserInfoTable />} /> {/* UserInfoTable 경로 추가 */}
      </Routes>

  );
};

export default AdminApp;
