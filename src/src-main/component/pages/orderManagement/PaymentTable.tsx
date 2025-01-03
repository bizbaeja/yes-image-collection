import React, { useState } from "react";

const PaymentTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"orderNumber" | "productOrder">(
    "orderNumber"
  );

  const handleTabChange = (tab: "orderNumber" | "productOrder") => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      {/* 탭 영역 */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          onClick={() => handleTabChange("orderNumber")}
          className={`p-2 font-bold border-b-2 ${
            activeTab === "orderNumber"
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500"
          }`}
        >
          주문번호별
        </button>
        <button
          onClick={() => handleTabChange("productOrder")}
          className={`p-2 font-bold border-b-2 ${
            activeTab === "productOrder"
              ? "border-blue-500 text-blue-500"
              : "border-transparent text-gray-500"
          }`}
        >
          품목주문별
        </button>
      </div>

      {/* 조건부 렌더링 */}
      {activeTab === "orderNumber" && (
        <div>
          {/* 주문번호별 테이블 */}
          <div className="flex justify-between items-center my-4">
            <div>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2">
                입금확인
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                주문취소
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                엑셀다운로드
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                인쇄
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">
                    <input type="checkbox" />
                  </th>
                  <th className="border p-2">주문일</th>
                  <th className="border p-2">주문번호</th>
                  <th className="border p-2">상품명</th>
                  <th className="border p-2">주문자</th>
                  <th className="border p-2">입금자</th>
                  <th className="border p-2">입금액</th>
                  <th className="border p-2">입금은행</th>
                  <th className="border p-2">처리여부</th>
                  <th className="border p-2">추가입금</th>
                  <th className="border p-2">메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={11} className="border p-4 text-center text-gray-500">
                    검색된 주문내역이 없습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "productOrder" && (
        <div>
          {/* 품목주문별 테이블 */}
          <div className="flex justify-between items-center my-4">
            <div>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2">
                입금확인
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                주문취소
              </button>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                엑셀다운로드
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
                인쇄
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">
                    <input type="checkbox" />
                  </th>
                  <th className="border p-2">상품코드</th>
                  <th className="border p-2">상품명</th>
                  <th className="border p-2">주문수량</th>
                  <th className="border p-2">단가</th>
                  <th className="border p-2">총액</th>
                  <th className="border p-2">처리여부</th>
                  <th className="border p-2">메모</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={8} className="border p-4 text-center text-gray-500">
                    검색된 주문내역이 없습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
