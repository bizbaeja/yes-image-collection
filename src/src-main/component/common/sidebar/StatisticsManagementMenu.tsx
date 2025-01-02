import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const StatisticsManagementMenu = () => {
  return (
    <>
      <DropdownMenu title="매출 분석">
        <li><Link to="/admin/statistics-management/daily-sales">일별 매출</Link></li>
        <li><Link to="/admin/statistics-management/weekly-sales">주별 매출</Link></li>
        <li><Link to="/admin/statistics-management/monthly-sales">월별 매출</Link></li>
        <li><Link to="/admin/statistics-management/payment-method-sales">결제 수단별 매출</Link></li>
        <li><Link to="/admin/statistics-management/vendor-sales">판매자별 매출</Link></li>
      </DropdownMenu>
      <DropdownMenu title="상품 분석">
        <li><Link to="/admin/statistics-management/product-ranking">상품 순위</Link></li>
        <li><Link to="/admin/statistics-management/category-ranking">카테고리 순위</Link></li>
        <li><Link to="/admin/statistics-management/cancel-return-ranking">취소/반품 순위</Link></li>
        <li><Link to="/admin/statistics-management/vendor-ranking">판매자 순위</Link></li>
        <li><Link to="/admin/statistics-management/detailed-vendor-ranking">상세 판매자 순위</Link></li>
        <li><Link to="/admin/statistics-management/cart-product-analysis">장바구니 상품 분석</Link></li>
        <li><Link to="/admin/statistics-management/wishlist-analysis">위시리스트 분석</Link></li>
        <li><Link to="/admin/statistics-management/niceitem-traffic">나이스아이템 트래픽</Link></li>
        <li><Link to="/admin/statistics-management/focusitem-traffic">포커스아이템 트래픽</Link></li>
      </DropdownMenu>
      <DropdownMenu title="고객 분석">
        <li><Link to="/admin/statistics-management/day-of-week-analysis">요일별 분석</Link></li>
        <li><Link to="/admin/statistics-management/hourly-analysis">시간대별 분석</Link></li>
        <li><Link to="/admin/statistics-management/delivery-area-analysis">배송지역 분석</Link></li>
        <li><Link to="/admin/statistics-management/point-analysis">포인트 분석</Link></li>
        <li><Link to="/admin/statistics-management/access-statistics">접속 통계</Link></li>
        <li><Link to="/admin/statistics-management/member-statistics">회원 통계</Link></li>
      </DropdownMenu>
    </>
  );
};

export default StatisticsManagementMenu;
