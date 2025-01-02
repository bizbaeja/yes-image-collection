import React from "react";
import { useLocation } from "react-router-dom";
import * as XLSX from 'xlsx';

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

function Inquery({
  orderDetails,
  handleChange,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleSubmit,
  title
}: InqueryProps) {
  const location = useLocation(); // 현재 경로 확인

  // 특정 경로에 따라 처리상태 행을 숨기기 위한 조건
  const shouldHideRow = [
    '/admin/order-management/pending-payments',
    '/admin/order-management/waiting-shipment',
    '/admin/order-management/in-transit',
    '/admin/order-management/return-exchange/cancel-before-payment',
    '/admin/order-management/return-exchange/cancel-management',
    '/admin/order-management/return-exchange/exchange-management',
    '/admin/order-management/return-exchange/return-management',
    '/admin/order-management/return-exchange/refund-management',
    '/admin/order-management/return-exchange/card-cancel-inquiry',
    
  ].includes(location.pathname);

  // 전체 데이터를 엑셀로 다운로드하는 함수
  const downloadExcel = (currentPage = false) => {
    // 엑셀로 저장할 데이터를 준비합니다. 예를 들어, orderDetails에 저장된 데이터를 변환합니다.
    const data = [
      ["주문상세번호", "상품명", "상품코드", "관리코드", "주문자", "주문자 연락처", "주문자 ID", "수취인"],
      [orderDetails.orderNumber, orderDetails.productName, orderDetails.productCode, orderDetails.managerCode, orderDetails.customerName, orderDetails.customerContact, orderDetails.customerID, orderDetails.receiverName]
    ];

    // 워크시트 생성
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // 워크북 생성
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "OrderDetails");

    // 엑셀 파일 다운로드
    XLSX.writeFile(wb, currentPage ? 'current_page_order_details.xlsx' : 'all_order_details.xlsx');
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>

      {/* 테이블 형식 */}
      <table className="table-auto w-full mb-6 border-collapse">
        <tbody>
          {/* 처리상태 */}
          {!shouldHideRow && (
          <tr className="border">
            <td className="p-2 border-r text-lg font-bold w-1/6">처리상태</td>
            <td className="p-2" colSpan={5}>
              <div className="grid grid-cols-5 gap-2">
                <label><input type="checkbox" /> 입금예정</label>
                <label><input type="checkbox" /> 결제완료</label>
                {/* <label><input type="checkbox" /> 입금확인</label>
                <label><input type="checkbox" /> 주문확인</label>
                <label><input type="checkbox" /> 배송대기</label>
                <label><input type="checkbox" /> 배송</label> */}
                <label><input type="checkbox" /> 구매확정</label>
                <label><input type="checkbox" /> 입금전취소완료</label>
                <label><input type="checkbox" /> 취소요청</label>
                {/* <label><input type="checkbox" /> 반품요청</label> */}
              </div>
            </td>
          </tr>
   )}
{/*   
          <tr className="border">
            <td className="p-2 text-lg font-bold w-1/6">결제방법</td>
            <td className="p-2" colSpan="5">
              <div className="flex space-x-4">
               
                <label><input type="checkbox" /> 가상계좌</label>
          
              </div>
            </td>
          </tr> */}

          {/* 검색항목 */}
          <tr className="border">
            <td className="p-2 text-lg  border font-bold" rowSpan={4}>검색항목</td>
            <td className="p-2 text-lg font-bold">주문상세번호</td>
            <td className="p-2">
              <input
                name="orderNumber"
                type="text"
                value={orderDetails.orderNumber}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
            <td className="p-2 text-lg font-bold">상품명</td>
            <td className="p-2">
              <input
                name="productName"
                type="text"
                value={orderDetails.productName}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
          </tr>

          <tr className="border">
            <td className="p-2 text-lg font-bold">상품코드</td>
            <td className="p-2">
              <input
                name="productCode"
                type="text"
                value={orderDetails.productCode}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
            <td className="p-2 text-lg font-bold">관리코드</td>
            <td className="p-2">
              <input
                name="managerCode"
                type="text"
                value={orderDetails.managerCode}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
          </tr>

          <tr className="border">
            <td className="p-2 text-lg font-bold">주문자</td>
            <td className="p-2">
              <input
                name="customerName"
                type="text"
                value={orderDetails.customerName}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
            <td className="p-2 text-lg font-bold">주문자 연락처</td>
            <td className="p-2">
              <input
                name="customerContact"
                type="text"
                value={orderDetails.customerContact}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
          </tr>

          <tr className="border">
            <td className="p-2 text-lg font-bold">주문자 ID</td>
            <td className="p-2">
              <input
                name="customerID"
                type="text"
                value={orderDetails.customerID}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
            <td className="p-2 text-lg font-bold">수취인</td>
            <td className="p-2">
              <input
                name="receiverName"
                type="text"
                value={orderDetails.receiverName}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
          </tr>

          {/* 송장번호 */}
          <tr className="border">
            <td className="p-2 border-r text-lg font-bold">송장번호</td>
            <td className="p-2" colSpan={5}>
              <input
                name="trackingNumber"
                type="text"
                value={orderDetails.trackingNumber}
                onChange={handleChange}
                className="w-full border px-2 py-1"
              />
            </td>
          </tr>

          {/* 검색기간 */}
          <tr className="border">
            <td className="p-2 border-r text-lg font-bold">검색기간</td>
            <td className="p-2">
              <select className="w-full border p-2">
                <option value="주문일자">주문일자</option>
                <option value="입금일자">입금일자</option>
                <option value="배송일자">배송일자</option>
              </select>
            </td>
            <td className="p-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border px-2 py-1"
              />
            </td>
            <td className="p-2 text-center">~</td>
            <td className="p-2">
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border px-2 py-1"
              />
            </td>
            <td>
              <button className="px-4 py-2 border text-gray-500">오늘</button>
            </td>
          </tr>

          {/* 판매자 ID 검색 */}
          <tr className="border">
            <td className="p-2 border-r text-lg font-bold">판매자 ID 검색</td>
            <td className="p-2" colSpan={5}>
              <input
                type="text"
                className="w-full border px-2 py-1"
                placeholder="검색어를 입력하세요"
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* 버튼 섹션 */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-gray-500 text-white px-11 py-2 rounded"
        >
          검색
        </button>
        <button
          onClick={() => setStartDate("")}
          className="bg-white border-2 text-gray-500 font-bold px-11 py-2 rounded"
        >
          초기화
        </button>
        {/* <button
          className="text-gray-600 px-4 py-2"
          onClick={() => downloadExcel(false)} // 전체 데이터 다운로드
        >
          <img
            src="/images/excel.webp"
            className="w-6 h-6 inline-block mr-3"
            alt="엑셀 다운로드 아이콘"
          />
          전체다운로드
        </button> */}
        {/* <button
          className="text-gray-600 px-4 py-2"
          onClick={() => downloadExcel(true)} // 현재 페이지 데이터 다운로드
        >
          <img
            src="/images/excel.webp"
            className="w-6 h-6 inline-block mr-3"
            alt="엑셀 다운로드 아이콘"
          />
          현재페이지 선택다운로드
        </button> */}
      </div>
    </div>
  );
}

export default Inquery;
