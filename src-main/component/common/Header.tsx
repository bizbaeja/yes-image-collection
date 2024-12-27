import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">NICE SHOP</Link>
      <nav className="flex space-x-4">
        <Link to="/order-management" className="text-sm">주문관리</Link>
        <Link to="/product-management" className="text-sm">상품관리</Link>
        <Link to="/member-management" className="text-sm">회원관리</Link>
        {/* 추가적인 네비게이션 링크 */}
      </nav>
      <div className="flex space-x-4">
        <span>부관리자1님이 사용중입니다.</span>
        <button className="bg-yellow-500 text-black py-2 px-4 rounded">로그아웃</button>
        <Link to="/" className="bg-orange-500 text-white py-2 px-4 rounded">홈페이지</Link>
      </div>
    </div>
  </header>
);

export default Header;
