import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const SettlementManagementMenu = () => {
  return (
    <>
      <DropdownMenu title="정산관리">
        <li><Link to="/admin/settlement-management/summary">정산요약</Link></li>
        <li><Link to="/admin/settlement-management/inquery">정산내역조회</Link></li>
        <li><Link to="/admin/settlement-management/interim-settlement">중간정산조회</Link></li>
        <li><Link to="/admin/settlement-management/sales-details">매출내역조회</Link></li>
      </DropdownMenu>
    </>
  );
};

export default SettlementManagementMenu;