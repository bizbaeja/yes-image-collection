import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="bg-gray-800 min-w-[1300px] text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">
        NICE SHOP
      </Link>
      <nav className="flex space-x-6">
        <Link to="/order-management" className="text-sm relative top-1">
          주문관리
        </Link>
        <Link to="/product-management" className="text-sm relative top-1">
          상품관리
        </Link>
        <Link to="/member-management" className="text-sm relative top-1">
          회원관리
        </Link>
        <Link to="/settlement-management" className="text-sm relative top-1">
          정산관리
        </Link>
        <Link to="/vendor-management" className="text-sm relative top-1">
          벤더사관리
        </Link>
        <Link to="/site-management" className="text-sm relative top-1">
          사이트관리
        </Link>
        <Link to="/promotion" className="text-sm relative top-1">
          프로모션
        </Link>
        <Link to="/statistics" className="text-sm relative top-1">
          통계
        </Link>
        <Link to="/mall-settings" className="text-sm relative top-1">
          쇼핑몰설정
        </Link>
      </nav>
      <div className="flex space-x-4">
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
