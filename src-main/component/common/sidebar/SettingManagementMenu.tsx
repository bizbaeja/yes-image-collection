import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

function SettingManagementMenu() {
  return (
    <div>
      <DropdownMenu title="관리자쇼핑몰관리">
        <ul>
          <li>
            <Link to="/admin/setting-management/environment-settings">환경설정</Link>
          </li>
        </ul>
      </DropdownMenu>
      <DropdownMenu title="관리자 admin 관리">
        <ul>
          <li>
            <Link to="/admin/setting-management/sub-admin-registration">부관리자 등록</Link>
          </li>
          <li>
            <Link to="/admin/setting-management/sub-admin-authority-management">부관리자 권한관리</Link>
          </li>
          {/* 여기에 adminId가 필요한 경우 */}
   
          <li>
            <Link to="/admin/setting-management/log-deletion-password-settings">로그삭제 비밀번호 설정</Link>
          </li>
          <li>
            <Link to="/admin/setting-management/member-group-deletion-password-settings">
              회원그룹삭제 비밀번호 설정
            </Link>
          </li>
        </ul>
      </DropdownMenu>
    </div>
  );
}

export default SettingManagementMenu;
