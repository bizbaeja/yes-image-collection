import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu';

const OrderManagementMenu = () => {
  return (
    <>
      <DropdownMenu title="주문 관리">
        <li><Link to="/admin/order-management">전체주문조회</Link></li>
        {/* <li><Link to="/admin/order-management/past-orders">과거주문조회</Link></li> */}
        <li><Link to="/admin/order-management/pending-payments">입금전 관리</Link></li>
        <li><Link to="/admin/order-management/waiting-shipment">배송 대기 관리</Link></li>
        {/* <li><Link to="/admin/order-management/in-transit">배송 중 관리</Link></li>
        <li><Link to="/admin/order-management/completed-delivery">배송 완료 조회</Link></li> */}
      </DropdownMenu>
      <DropdownMenu title="취소/교환/반품/환불">
        {/* <li><Link to="/admin/order-management/return-exchange/cancel-before-payment">입금 전 취소관리</Link></li> */}
        <li><Link to="/admin/order-management/return-exchange/cancel-management">취소관리</Link></li>
        <li><Link to="/admin/order-management/return-exchange/exchange-management">교환관리</Link></li>
        <li><Link to="/admin/order-management/return-exchange/return-management">반품관리</Link></li>
        <li><Link to="/admin/order-management/return-exchange/refund-management">환불관리</Link></li>
      </DropdownMenu>
    </>
  );
};

export default OrderManagementMenu;