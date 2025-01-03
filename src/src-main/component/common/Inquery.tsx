import React from "react";
import { useLocation } from "react-router-dom";

interface OrderDetails {
  orderNumber: string;
  productName: string;
  productCode: string;
  managerCode: string;
  customerName: string;
  customerContact: string;
  customerID: string;
  receiverName: string;
  trackingNumber: string;
}

interface InqueryProps {
  orderDetails: OrderDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startDate: string;
  endDate: string;
  setStartDate: (date: string) => void;
  setEndDate: (date: string) => void;
  handleSubmit: () => void;
  title: string;
}

const Inquery: React.FC<InqueryProps> = ({
  orderDetails,
  handleChange,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleSubmit,
  title,
}) => {
  const location = useLocation();
  const shouldHideRow = [
    "/admin/order-management/in-transit",
    "/admin/order-management/return-exchange/cancel-before-payment",
    "/admin/order-management/return-exchange/cancel-management",
    "/admin/order-management/return-exchange/exchange-management",
    "/admin/order-management/return-exchange/return-management",
    "/admin/order-management/return-exchange/refund-management",
  ].includes(location.pathname);

  return (
    <div className="container w-full p-4 sm:p-6 bg-white overflow-x-auto">
      <h1 className="text-xl sm:text-3xl font-bold mb-6">{title}</h1>

      {/* 테이블 형식 */}
      <table className="table-auto min-w-full mb-6 border-collapse text-sm sm:text-base">
        <tbody>
          {/* 처리상태 */}
          {!shouldHideRow && (
            <tr className="border">
              <td className="p-2 border-r text-lg font-bold w-1/6">처리상태</td>
              <td className="p-2" colSpan={5}>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 whitespace-nowrap">
                  <label>
                    <input type="checkbox" /> 입금예정
                  </label>
                  <label>
                    <input type="checkbox" /> 결제완료
                  </label>
                  <label>
                    <input type="checkbox" /> 입금확인
                  </label>
                  <label>
                    <input type="checkbox" /> 주문확인
                  </label>
                  <label>
                    <input type="checkbox" /> 배송대기
                  </label>
                  <label>
                    <input type="checkbox" /> 배송중
                  </label>
                  <label>
                    <input type="checkbox" /> 구매확정
                  </label>
                  <label>
                    <input type="checkbox" /> 입금전취소완료
                  </label>
                  <label>
                    <input type="checkbox" /> 취소요청
                  </label>
                  <label>
                    <input type="checkbox" /> 반품요청
                  </label>
                </div>
              </td>
            </tr>
          )}

          {/* 검색항목 */}
          <tr className="border">
            <td className="p-2 border-r font-bold text-lg sm:text-base" rowSpan={4}>
              검색항목
            </td>
            <td className="p-2 font-bold">주문상세번호</td>
            <td className="p-2">
              <input
                name="orderNumber"
                type="text"
                value={orderDetails.orderNumber}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
            <td className="p-2 font-bold">상품명</td>
            <td className="p-2">
              <input
                name="productName"
                type="text"
                value={orderDetails.productName}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
          </tr>

          <tr className="border">
            <td className="p-2 font-bold">상품코드</td>
            <td className="p-2">
              <input
                name="productCode"
                type="text"
                value={orderDetails.productCode}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
            <td className="p-2 font-bold">관리코드</td>
            <td className="p-2">
              <input
                name="managerCode"
                type="text"
                value={orderDetails.managerCode}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
          </tr>

          <tr className="border">
            <td className="p-2 font-bold">주문자</td>
            <td className="p-2">
              <input
                name="customerName"
                type="text"
                value={orderDetails.customerName}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
            <td className="p-2 font-bold">주문자 연락처</td>
            <td className="p-2">
              <input
                name="customerContact"
                type="text"
                value={orderDetails.customerContact}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
          </tr>

          <tr className="border">
            <td className="p-2 font-bold">주문자 ID</td>
            <td className="p-2">
              <input
                name="customerID"
                type="text"
                value={orderDetails.customerID}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
            <td className="p-2 font-bold">수취인</td>
            <td className="p-2">
              <input
                name="receiverName"
                type="text"
                value={orderDetails.receiverName}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
          </tr>

          {/* 송장번호 */}
          <tr className="border">
            <td className="p-2 border-r font-bold">송장번호</td>
            <td className="p-2" colSpan={5}>
              <input
                name="trackingNumber"
                type="text"
                value={orderDetails.trackingNumber}
                onChange={handleChange}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
          </tr>

          {/* 검색기간 */}
          <tr className="border">
            <td className="p-2 border-r font-bold">검색기간</td>
            <div className="flex space-x-2 whitespace-nowrap">
  <button className="p-2 border rounded">오늘</button>
  <button className="p-2 border rounded">3일</button>
  <button className="p-2 border rounded">1주일</button>
</div>

            <td className="p-2">
            
   
              <select className="w-full border p-2 sm:py-2 sm:px-4">
                <option value="주문일자">주문일자</option>
                <option value="입금일자">입금일자</option>
                <option value="배송일자">배송일자</option>
              </select>
              <input className="border">
              </input>
            </td>
            <td className="p-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
            <td className="p-2 text-center">~</td>
            <td className="p-2">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border px-2 py-1 sm:py-2 sm:px-4"
              />
            </td>
          </tr>
          <tr className="border">
            <td className="border">검색어</td>
            <td className="flex items-center space-x-2">
              <select className="border p-2 rounded inline-block">
                <option value="주문번호">전체</option>
                <option value="주문번호">1</option>
                <option value="주문번호">2</option>
              </select>
              <input      className="w-72 border rounded px-2 py-1 sm:py-2 sm:px-4 inline-block ">
              </input>
              <button className="border rounded p-2">+</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 버튼 섹션 */}
      <div className="flex justify-center space-x-2 sm:space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-gray-500 text-white px-4 sm:px-11 py-2 rounded"
        >
          검색
        </button>
        <button
          onClick={() => setStartDate("")}
          className="bg-white border-2 text-gray-500 font-bold px-4 sm:px-11 py-2 rounded"
        >
          초기화
        </button>
      </div>
    </div>
  );
};

export default Inquery;
