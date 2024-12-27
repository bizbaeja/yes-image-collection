import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <aside className="w-64 bg-orange-500 text-white p-4">
    <nav>
      <ul className="space-y-2">
        <li>
          <Link to="/order-management" className="block px-4 py-2 hover:bg-orange-600">주문 관리</Link>
        </li>
        <li>
          <Link to="/product-management" className="block px-4 py-2 hover:bg-orange-600">상품 관리</Link>
        </li>
        <li>
          <Link to="/member-management" className="block px-4 py-2 hover:bg-orange-600">회원 관리</Link>
        </li>
        {/* 추가적인 사이드바 링크 */}
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
