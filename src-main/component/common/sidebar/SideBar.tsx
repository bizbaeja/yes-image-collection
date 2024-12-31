import React from "react";
import { useLocation } from "react-router-dom";
import OrderManagementMenu from "./OrderManagementMenu";
import ProductManagementMenu from "./ProductManagementMenu";
import CategoryManagementMenu from "./CategoryManagementMenu";
import MemberManagementMenu from "./MemberManagementMenu";
import SettlementManagementMenu from "./SettlementManagementMenu";
import BoardManagementMenu from "./BoardManagementMenu";
import PromotionManagementMenu from "./PromotionManagementMenu";
import StatisticsManagementMenu from "./StatisticsManagementMenu";
import SettingManagementMenu from "./SettingManagementMenu";

const Sidebar: React.FC = () => {
  const location = useLocation();

  // 현재 경로에 따라 Sidebar 메뉴를 변경
  const renderSidebarMenu = () => {
    if (location.pathname.includes("/admin/order-management")) {
      return <OrderManagementMenu />;
    } else if (location.pathname.includes("/admin/product-management")) {
      return <ProductManagementMenu />;
    } else if (location.pathname.includes("/admin/category-management")) {
      return <CategoryManagementMenu />;
    } else if (location.pathname.includes("/admin/member-management")) {
      return <MemberManagementMenu />;
    } else if (location.pathname.includes("/admin/settlement-management")) {
      return <SettlementManagementMenu />;
    }  else if (
      location.pathname.includes("/admin/board-management") ||
      location.pathname.includes("/admin/site-management")
    ) {
      return <BoardManagementMenu />;
    } else if (location.pathname.includes("/admin/promotion-management")) {
      return <PromotionManagementMenu />;
    } else if (location.pathname.includes("/admin/statistics-management")) {
      return <StatisticsManagementMenu />;
    } else if (location.pathname.includes("/admin/setting-management")) {
      return <SettingManagementMenu />;
    } else {
      // 기본 메뉴 또는 대시보드 메뉴 렌더링
      return (
        <>
          <OrderManagementMenu />
          <ProductManagementMenu />
          <CategoryManagementMenu />
          <MemberManagementMenu />
          <SettlementManagementMenu />
          <BoardManagementMenu />
          <PromotionManagementMenu />
          <StatisticsManagementMenu />
        </>
      );
    }
  };

  return (
    <aside className="w-64 bg-blue-900 text-white shadow-md min-h-screen">
      <nav>
        <ul className="space-y-2">{renderSidebarMenu()}</ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
