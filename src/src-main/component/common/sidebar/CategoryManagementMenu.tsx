
import DropdownMenu from '../DropdownMenu';
import { Link } from 'react-router-dom';
const CategoryManagementMenu = () => {
    return (
      <DropdownMenu title="분류 관리">
        <li><Link to="/admin/category-management">분류관리</Link></li>
        <li><Link to="/admin/category-management/special-category">상설특가관 분류관리</Link></li>
        <li><Link to="/admin/category-management/brand-category">브랜드장보기 분류관리</Link></li>
        <li><Link to="/admin/category-management/monthly-category">이달의 신상 분류관리</Link></li>
        <li><Link to="/admin/category-management/exhibition-category">기획전 분류관리</Link></li>
        <li><Link to="/admin/category-management/bizshop-category">BizShop 분류관리</Link></li>
        <li><Link to="/admin/category-management/nice-shop-category">나이스장터 분류관리</Link></li>
        <li><Link to="/admin/category-management/flower-category">꽃배달 분류관리</Link></li>
      </DropdownMenu>
    );
  };
  
  export default CategoryManagementMenu;