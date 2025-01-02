import React, { useState } from "react";
import Pagination from "./Pagination"; // Pagination 컴포넌트 사용
import { Link } from "react-router-dom";
const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState("");
  const [selectedCourier, setSelectedCourier] = useState("");
  const [trackingNumber, setTrackingNumber] = useState("");
  const totalPages = 10; // 총 페이지 수
  const rowsPerPage = 20; // 페이지당 보여줄 행 수

  // 더미 데이터 생성
  const orders = new Array(20).fill(null).map((_, index) => ({
    status: "미정",
    orderType: "결제확인",
    customerId: `customer${index + 1}`,
    orderId: `order${index + 1}`,
    trackingNumber: `TRK${index + 1000}`,
    carrier: index % 2 === 0 ? "CJ 대한통운" : "로젠택배",
    product: `상품 ${index + 1}`,
    orderDate: `2024-09-24`,
    deliveryStatus: "배송중",
    paymentStatus: "입금확인",
    totalAmount: 10000 + index * 1000,
  }));

  // 페이지에 따라 보여줄 데이터
  const displayedOrders = orders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // 일괄 적용 핸들러
  const applyBulkAction = () => {
    console.log("선택된 주문 상태:", selectedOrderStatus);
    console.log("선택된 택배사:", selectedCourier);
    console.log("적용된 송장번호:", trackingNumber);
    // 일괄 적용 로직을 여기서 추가
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container mx-auto p-6 bg-white ">
      <h1 className="text-2xl font-bold mb-4">주문 리스트</h1>

      {/* 상단 컨트롤러 */}
      {/* <div className="flex space-x-4 items-center mb-4 ">
        <div className="flex items-center space-x-2">
          <label>선택한 주문을</label>
          <select
            value={selectedOrderStatus}
            onChange={(e) => setSelectedOrderStatus(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="주문확인">주문확인</option>
            <option value="결제확인">결제확인</option>
            <option value="배송중">배송중</option>
          </select>
          <button onClick={applyBulkAction} className="bg-black text-white px-4 py-2 rounded whitespace-nowrap">
            일괄적용
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <label>선택한 주문의 택배사를</label>
          <select
            value={selectedCourier}
            onChange={(e) => setSelectedCourier(e.target.value)}
            className="border px-2 py-1"
          >
            <option value="CJ 대한통운">CJ 대한통운</option>
            <option value="로젠택배">로젠택배</option>
          </select>
          <button onClick={applyBulkAction} className="bg-black text-white px-4 py-2 rounded whitespace-nowrap">
            일괄적용
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <label>선택한 주문의 송장번호를</label>
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="border px-2 py-1"
          />
          <button onClick={applyBulkAction} className="bg-black text-white px-4 py-2 rounded whitespace-nowrap">
            일괄적용
          </button>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded whitespace-nowrap">전체저장</button>
      </div> */}

      {/* 테이블 */}
      <div className="overflow-auto">
        <table className="min-w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="border p-2">상세</th>
              <th className="border p-2">주문 상태</th>
              <th className="border p-2">주문타입</th>
              <th className="border p-2">주문자 ID</th>
              <th className="border p-2">주문번호</th>
              <th className="border p-2">송장번호</th>
              <th className="border p-2">택배사</th>
              <th className="border p-2">상품명</th>
              <th className="border p-2">주문일</th>
              <th className="border p-2">배송 상태</th>
              <th className="border p-2">입금 상태</th>
              <th className="border p-2">총 금액</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order, index) => (
              <tr key={index} className="border-b text-center">
                <td className="border p-2">
                <Link to={`/admin/order-management/entire-orders/order-details/${order.orderId}`}>
  <button className="bg-white text-gray-500 border-2 border-gray-500 font-bold px-2 py-1 rounded">
    상세
  </button>
</Link>
                </td>
                <td className="border p-2">{order.status}</td>
                <td className="border p-2">{order.orderType}</td>
                <td className="border p-2">{order.customerId}</td>
                <td className="border p-2">{order.orderId}</td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={order.trackingNumber}
                    onChange={(e) => handleInputChange(e)} 
                  
                    className="border p-1 w-full"
                  />
                </td>
                <td className="border p-2">
                  <select className="border p-1">
                    <option>CJ 대한통운</option>
                    <option>로젠택배</option>
                  </select>
                </td>
                <td className="border p-2">{order.product}</td>
                <td className="border p-2">{order.orderDate}</td>
                <td className="border p-2">{order.deliveryStatus}</td>
                <td className="border p-2">{order.paymentStatus}</td>
                <td className="border p-2">{order.totalAmount.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFirstLast={true} // 처음/끝 페이지 버튼 표시
        showPrevNext={true} // 이전/다음 페이지 버튼 표시
      />
    </div>
  );
};

export default OrderList;
