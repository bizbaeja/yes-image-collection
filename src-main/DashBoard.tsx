import React from 'react';
import { Link } from 'react-router-dom';
import Header from './component/common/Header';
import Sidebar from './component/common/SideBar';
import Footer from './component/common/Footer';
const DashBoard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4">
          <h1 className="text-2xl font-bold mb-4">관리자 대시보드</h1>
          <div className="grid grid-cols-3 gap-4">
            <Link to="/order-management" className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300">
              주문 관리
            </Link>
            <Link to="/product-management" className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300">
              상품 관리
            </Link>
            <Link to="/member-management" className="p-4 bg-gray-200 rounded shadow hover:bg-gray-300">
              회원 관리
            </Link>
            {/* 추가적인 관리 페이지 링크 */}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
