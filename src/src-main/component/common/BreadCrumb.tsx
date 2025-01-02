import React from "react";
import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const breadcrumbNameMap: { [key: string]: string } = {
    "admin": "관리자",
    "order-management": "주문 관리",
    "entire-orders": "전체 주문 조회",
    "past-orders": "과거 주문 조회",
    "pending-payments": "입금 대기 관리",
    "preparing-shipment": "배송 준비 중",
    "waiting-shipment": "배송 대기 관리",
    "in-transit": "배송 중 관리",
    "completed-delivery": "배송 완료 조회",
    "return-exchange": "취소/교환/반품/환불",
    "cancel-before-payment": "입금 전 취소 관리",
    "cancel-management": "취소 관리",
    "exchange-management": "교환 관리",
    "return-management": "반품 관리",
    "refund-management": "환불 관리",
    "card-cancel-inquiry": "카드 취소 조회",
    "admin-refund-management": "관리자 환불 관리",
    "product-management": "상품 관리",
    "product-list": "전체 상품 목록",
    "admin-products": "관리자 상품 목록",
    "vendor-products": "판매자 상품 목록",
    "admin-register": "관리자 개별 등록",
    "vendor-register": "판매자 개별 등록",
    "bulk-register": "대량 등록",
    "regional-register": "도서산간 지역 등록",
    "approval-management": "상품 승인 관리",
    "main": "메인 상품 관리",
    "category-management": "분류 관리",
    "special-category": "상설 특가 분류 관리",
    "brand-category": "브랜드 장보기 분류 관리",
    "monthly-category": "이달의 신상 분류 관리",
    "bizshop-category": "비즈샵 분류 관리",
    "exhibition-category": "기획전 분류 관리",
    "flower-delivery-category": "꽃 배달 분류 관리",
    "nice-shop-category": "나이스샵 분류 관리",
    "member-management": "회원 관리",
    "settlement-management": "정산 관리",
    "summary": "정산 요약",
    "interim-settlement": "중간 정산 조회",
    "sales-details": "매출 내역 조회",
    "vendor-management": "벤더 관리",
    "primary": "1차 벤더 관리",
    "sub": "2차 벤더 관리",
    "sub-vendors": "2차 벤더 상세 조회",
    "board-management": "게시판 관리",
    "notice": "공지사항 관리",
    "faq": "FAQ 관리",
    "product-qna": "상품 Q&A 관리",
    "product-review": "상품 리뷰 관리",
    "promotion-management": "프로모션 관리",
    "coupon-create": "쿠폰 생성",
    "coupon-issue": "쿠폰 발급",
    "coupon-bulk-issue": "쿠폰 대량 발급",
    "coupon-inquiry": "쿠폰 조회",
    "serial-coupon-issue": "시리얼 쿠폰 발급",
    "serial-coupon-inquiry": "시리얼 쿠폰 조회",
    "top-banner": "탑 배너 관리",
    "rolling-image": "롤링 이미지 관리",
    "new-item-image": "신상품 이미지 관리",
    "middle-banner-image": "중간 배너 이미지 관리",
    "nice-item-image": "나이스 아이템 이미지 관리",
    "focus-item-image": "포커스 아이템 이미지 관리",
    "sub-page-image": "서브 페이지 이미지 관리",
    "new-item-management": "신상품 관리",
    "oh-special-price": "특가 상품 관리",
    "statistics-management": "통계 관리",
    "daily-sales": "일일 매출",
    "weekly-sales": "주간 매출",
    "monthly-sales": "월간 매출",
    "payment-method-sales": "결제 방식별 매출",
    "vendor-sales": "벤더별 매출",
    "product-ranking": "상품 순위",
    "category-ranking": "카테고리 순위",
    "cancel-return-ranking": "취소/반품 순위",
    "vendor-ranking": "벤더 순위",
    "detailed-vendor-ranking": "상세 벤더 순위",
    "cart-product-analysis": "장바구니 상품 분석",
    "wishlist-analysis": "위시리스트 분석",
    "niceitem-traffic": "나이스 아이템 트래픽",
    "focusitem-traffic": "포커스 아이템 트래픽",
    "day-of-week-analysis": "요일별 분석",
    "hourly-analysis": "시간대별 분석",
    "delivery-area-analysis": "배송 지역 분석",
    "point-analysis": "포인트 분석",
    "access-statistics": "접속 통계",
    "member-statistics": "회원 통계",
  };

  return (
    <nav className="breadcrumb mb-6 flex justify-end mr-32 pt-10" aria-label="breadcrumb">
      <ol className="flex space-x-2 text-gray-600">
        <li>
          <Link to="/admin" className="hover:text-black">
            홈
          </Link>
        </li>
        {pathnames.map((path: string, index: number) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={path}>
              <span className="mx-2">{'>'}</span>
              {isLast ? (
                <span className="text-black">{breadcrumbNameMap[path] || path}</span>
              ) : (
                <Link to={routeTo} className="hover:text-black">
                  {breadcrumbNameMap[path] || path}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
