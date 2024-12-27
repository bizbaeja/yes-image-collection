import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  // 관리자 쇼핑몰 관리 메뉴 렌더링
  const renderMallManagementMenu = () => (
    <ul className="space-y-2">
      <li>
        <button
          className="w-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300 text-left flex justify-between"
          onClick={() => toggleDropdown("mall")}
        >
          관리자 쇼핑몰 관리
          <span>{openDropdown === "mall" ? "▲" : "▼"}</span>
        </button>
        {openDropdown === "mall" && (
          <ul className="pl-6">
            <li className="hover:bg-orange-500">
              <Link to="/mall-settings/environment">환경설정</Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );

  // 관리자 admin 관리 메뉴 렌더링
  const renderAdminManagementMenu = () => (
    <ul className="space-y-2">
      <li>
        <button
          className="w-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300 text-left flex justify-between"
          onClick={() => toggleDropdown("admin")}
        >
          관리자 admin 관리
          <span>{openDropdown === "admin" ? "▲" : "▼"}</span>
        </button>
        {openDropdown === "admin" && (
          <ul className="pl-6">
            <li className="hover:bg-orange-500">
              <Link to="/admin/register">부관리자 등록</Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link to="/admin/permissions">부관리자 권한관리</Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link to="/admin/password">로그삭제 비밀번호 설정</Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link to="/admin/group">회원그룹삭제 비밀번호 설정</Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );

  // 사용자 관리 메뉴 렌더링
  const renderUserManagementMenu = () => (
    <ul className="space-y-2">
      <li>
        <button
          className="w-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300 text-left flex justify-between"
          onClick={() => toggleDropdown("user")}
        >
          사용자 관리
          <span>{openDropdown === "user" ? "▲" : "▼"}</span>
        </button>
        {openDropdown === "user" && (
          <ul className="pl-6">
            <li className="hover:bg-orange-500">
              <Link to="/user-management/list">사용자 목록</Link>
            </li>
            <li className="hover:bg-orange-500">
              <Link to="/user-management/roles">권한 관리</Link>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );

  // 설정 메뉴 렌더링
  const renderSettingsMenu = () => (
    <ul className="space-y-2">
      <li>
        <Link
          to="/settings/general"
          className="hover:bg-orange-600 block px-4 py-2"
        >
          일반 설정
        </Link>
      </li>
      <li>
        <Link
          to="/settings/advanced"
          className="hover:bg-orange-600 block px-4 py-2"
        >
          고급 설정
        </Link>
      </li>
    </ul>
  );

  return (
    <aside className="w-64 bg-orange-500 text-white min-h-screen shadow-md">
      <nav>
        {renderMallManagementMenu()}
        {renderAdminManagementMenu()}
        {renderUserManagementMenu()}
        {renderSettingsMenu()}
      </nav>
    </aside>
  );
}

export default Sidebar;
