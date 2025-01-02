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

  // 경로와 컴포넌트 매핑
  const menuMap: { [key: string]: React.ReactNode } = {
    "/admin/order-management": <OrderManagementMenu />,
    "/admin/product-management": <ProductManagementMenu />,
    "/admin/category-management": <CategoryManagementMenu />,
    "/admin/member-management": <MemberManagementMenu />,
    "/admin/settlement-management": <SettlementManagementMenu />,
    "/admin/board-management": <BoardManagementMenu />,
    "/admin/promotion-management": <PromotionManagementMenu />,
    "/admin/statistics-management": <StatisticsManagementMenu />,
    "/admin/setting-management": <SettingManagementMenu />,
  };

  // 현재 경로에 맞는 메뉴 가져오기
  const currentMenu = Object.keys(menuMap).find((path) =>
    location.pathname.includes(path)
  );

  return (
    <aside className="w-64 bg-blue-900 text-white shadow-md min-h-screen">
      <nav>
        <ul className="space-y-2">
          {currentMenu ? menuMap[currentMenu] : (
            <>
              {/* 기본 메뉴 렌더링 */}
              <OrderManagementMenu />
              <ProductManagementMenu />
              <CategoryManagementMenu />
              <MemberManagementMenu />
              <SettlementManagementMenu />
              <BoardManagementMenu />
              <PromotionManagementMenu />
              <StatisticsManagementMenu />
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
