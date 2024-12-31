import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const ProductManagementMenu = () => {
  return (
    <>
      <DropdownMenu title="상품 관리">
        <li><Link to="/admin/product-management/product-list">전체 상품목록</Link></li>
        {/* <li><Link to="/admin/product-management/admin-products">관리자 상품목록</Link></li>
        <li><Link to="/admin/product-management/vendor-products">판매자 상품목록</Link></li> */}
      </DropdownMenu>
      <DropdownMenu title="상품 등록">
        <li><Link to="/admin/product-management/admin-register">관리자 개별등록</Link></li>
        <li><Link to="/admin/product-management/vendor-register">판매자 개별등록</Link></li>
        <li><Link to="/admin/product-management/bulk-register">대량등록</Link></li>
        <li><Link to="/admin/product-management/regional-register">도서산간지역등록</Link></li>
      </DropdownMenu>
      <DropdownMenu title="분류 관리">
      <li><Link to="/admin/product-management/category">분류관리</Link></li>
      <li><Link to="/admin/product-management/special-category">상설특가관 분류관리</Link></li>
      <li><Link to="/admin/product-management/brand-category">브랜드장보기 분류관리</Link></li>
      <li><Link to="/admin/product-management/monthly-category">이달의 신상 분류관리</Link></li>
      <li><Link to="/admin/product-management/exhibition-category">기획전 분류관리</Link></li>
      <li><Link to="/admin/product-management/bizshop-category">BizShop 분류관리</Link></li>
      <li><Link to="/admin/product-management/nice-shop-category">나이스장터 분류관리</Link></li>
      <li><Link to="/admin/product-management/flower-category">꽃배달 분류관리</Link></li>
    </DropdownMenu>
      <li>
        <Link to="/admin/product-management/approval-management" className="block px-4 py-2 hover:bg-orange-600">
          상품 승인 관리
        </Link>
      </li>
      <li>
        <Link to="/admin/product-management/approval-management/main" className="block px-4 py-2 hover:bg-orange-600">
          메인 상품 관리
        </Link>
      </li>
    </>
  );
};

export default ProductManagementMenu;