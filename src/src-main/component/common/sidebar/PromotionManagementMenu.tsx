import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

const PromotionManagementMenu = () => {
  return (
    <>
      <DropdownMenu title="쿠폰 관리">
        <li>
          <Link to="/admin/promotion-management/coupon-create">쿠폰 생성</Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/coupon-issue">쿠폰 발급</Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/coupon-bulk-issue">
            쿠폰 대량 발급
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/coupon-inquiry">쿠폰 조회</Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/serial-coupon-issue">
            시리얼 쿠폰 발급
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/serial-coupon-inquiry">
            시리얼 쿠폰 조회
          </Link>
        </li>
      </DropdownMenu>
      <DropdownMenu title="배너 관리">
        <li>
          <Link to="/admin/promotion-management/top-banner">
            상단 배너 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/rolling-image">
            롤링 이미지 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/middle-banner-image">
            중간 배너 이미지 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/new-item-image">
            신상품 이미지 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/nice-item-image">
            나이스 상품 이미지 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/focus-item-image">
            포커스 상품 이미지 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/promotion-management/sub-page-image">
            서브 페이지 이미지 관리
          </Link>
        </li>
      </DropdownMenu>
      <DropdownMenu title="페이지 관리">
        <li>
          <Link
            to="/admin/promotion-management/new-item-management"
            className="block px-4 py-2 hover:bg-orange-600"
          >
            신상품 관리
          </Link>
        </li>
        <li>
          <Link
            to="/admin/promotion-management/oh-special-price"
            className="block px-4 py-2 hover:bg-orange-600"
          >
            오특가 관리
          </Link>
        </li>
      </DropdownMenu>
    </>
  );
};

export default PromotionManagementMenu;
