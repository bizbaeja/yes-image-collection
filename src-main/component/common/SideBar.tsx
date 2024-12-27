import React, { useState } from "react";
import { Link } from "react-router-dom";

// 메뉴 데이터 정의
const menuData = [
  {
    title: "관리자 쇼핑몰 관리",
    key: "mall",
    items: [{ name: "환경설정", path: "/mall-settings/environment" }],
  },
  {
    title: "관리자 admin 관리",
    key: "admin",
    items: [
      { name: "부관리자 등록", path: "/admin/register" },
      { name: "부관리자 권한관리", path: "/admin/permissions" },
      { name: "로그삭제 비밀번호 설정", path: "/admin/password" },
      { name: "회원그룹삭제 비밀번호 설정", path: "/admin/group" },
    ],
  },
  {
    title: "사용자 관리",
    key: "user",
    items: [
      { name: "사용자 목록", path: "/user-management/list" },
      { name: "권한 관리", path: "/user-management/roles" },
    ],
  },
  {
    title: "설정",
    key: "settings",
    items: [
      { name: "일반 설정", path: "/settings/general" },
      { name: "고급 설정", path: "/settings/advanced" },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <aside className="w-64 bg-orange-500 text-white min-h-screen shadow-md">
      <nav className="p-4">
        {menuData.map((menu) => (
          <div key={menu.key} className="mb-4">
            <button
              onClick={() => toggleDropdown(menu.key)}
              className="w-full text-left px-4 py-2 hover:bg-orange-600 flex justify-between items-center"
            >
              {menu.title}
              <span>{openDropdown === menu.key ? "▲" : "▼"}</span>
            </button>
            {openDropdown === menu.key && (
              <ul className="pl-6 mt-2">
                {menu.items.map((item) => (
                  <li key={item.path} className="hover:bg-orange-500 rounded">
                    <Link to={item.path} className="block px-4 py-1">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
