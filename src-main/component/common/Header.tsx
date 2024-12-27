import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        NICE SHOP
      </Link>
      <div className="flex space-x-6">
        <span>부관리자님이 사용중입니다.</span>
        <button className="bg-yellow-500 text-black py-1 px-4 rounded">
          로그아웃
        </button>
        <button className="bg-orange-500 text-white py-1 px-4 rounded">
          홈페이지
        </button>
      </div>
    </div>
  </header>
);

export default Header;
