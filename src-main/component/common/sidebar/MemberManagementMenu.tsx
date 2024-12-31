
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const MemberManagementMenu = () => {
  return (
    <>
      <DropdownMenu title="회원 조회">
        <li><Link to="/admin/member-management/info">회원 정보 조회</Link></li>
        <li><Link to="/admin/member-management/group">회원 그룹 조회</Link></li>
        <li><Link to="/admin/member-management/certification">인증회원 정보 조회</Link></li>
        <li><Link to="/admin/member-management/regular-member">주문 회원 조회</Link></li>
        <li><Link to="/admin/member-management/corporate-member">구매액 상위 회원 조회</Link></li>
        <li><Link to="/admin/member-management/first-order-member">첫 구매 회원 조회</Link></li>
        <li><Link to="/admin/member-management/withdrawal-member">탈퇴 회원 조회</Link></li>
        <li><Link to="/admin/member-management/blacklist-member">정지 회원 조회</Link></li>
      </DropdownMenu>
      <DropdownMenu title="회원 관리">
        <li><Link to="/admin/member-management/grade">회원 등급별 관리</Link></li>
        <li><Link to="/admin/member-management/xlsx-register">회원 엑셀 등록</Link></li>
        <li><Link to="/admin/member-management/inactive-member-benefit">휴면회원 관리</Link></li>
      </DropdownMenu>
      <DropdownMenu title="회원 혜택 관리">
        <li><Link to="/admin/member-management/benefit/shop-point">샵 포인트 관리</Link></li>
        <li><Link to="/admin/member-management/benefit/welfare-point">복지 포인트 관리</Link></li>
        <li><Link to="/admin/member-management/benefit/credit-point">여신 포인트 관리</Link></li>
        <li><Link to="/admin/member-management/benefit/point-xlsx-management">포인트 엑셀 관리</Link></li>
        <li><Link to="/admin/member-management/benefit/coupon">쿠폰 관리</Link></li>
      </DropdownMenu>
      <li>
        <Link to="/admin/member-management/message" className="block px-4 py-2 hover:bg-orange-600">
          메시지 발송 관리
        </Link>
      </li>
    </>
  );
};

export default MemberManagementMenu;