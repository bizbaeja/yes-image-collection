import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header className="bg-white text-black py-4 shadow-md border-b-2">
    {/* 사용자 정보 및 버튼 */}
    <div className="flex space-x-6 items-center justify-end px-4">
      <span className="text-sm text-gray-700">부관리자님이 사용중입니다.</span>
      <button className="bg-blue-950 text-white py-1 px-4 rounded hover:bg-blue-800">
        로그아웃
      </button>
      <button className="bg-orange-500 text-white py-1 px-4 rounded hover:bg-orange-400">
        홈페이지
      </button>
    </div>

    {/* 상단 헤더 */}
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-4 px-4">
      <Link to="/" className="text-lg font-bold text-blue-950 mb-4 md:mb-0">
        S IMAGE COLLECTION
      </Link>

      {/* 네비게이션 바 */}
      <nav className="w-full md:w-auto flex flex-col md:flex-row justify-center items-center font-bold text-2xl space-y-4 md:space-y-0 md:space-x-10">
        <Link
          to="/admin/statistics-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          통계
        </Link>
        <Link
          to="/admin/settlement-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          정산관리
        </Link>
        <Link
          to="/admin/member-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          회원관리
        </Link>
        <Link
          to="/admin/promotion-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          프로모션
        </Link>
        <Link
          to="/admin/board-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          사이트관리
        </Link>
        <Link
          to="/admin/product-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          상품관리
        </Link>
        <Link
          to="/admin/order-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          주문관리
        </Link>
        <Link
          to="/admin/setting-management"
          className="text-sm top-3 relative text-gray-700 hover:text-blue-950"
        >
          환경설정
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
