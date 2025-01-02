import React from "react";

const DashboardContent: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      {/* 상단 카드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">사용자 수</h2>
          <p className="text-2xl font-bold text-blue-500">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">매출</h2>
          <p className="text-2xl font-bold text-green-500">₩5,678,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">신규 가입자</h2>
          <p className="text-2xl font-bold text-yellow-500">120</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-700">총 주문</h2>
          <p className="text-2xl font-bold text-red-500">987</p>
        </div>
      </div>

      {/* 데이터 테이블 */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">주문 목록</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">주문 번호</th>
              <th className="py-3 px-6 text-left">고객 이름</th>
              <th className="py-3 px-6 text-center">상태</th>
              <th className="py-3 px-6 text-center">금액</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">10001</td>
              <td className="py-3 px-6 text-left">홍길동</td>
              <td className="py-3 px-6 text-center">
                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">완료</span>
              </td>
              <td className="py-3 px-6 text-center">₩123,000</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left">10002</td>
              <td className="py-3 px-6 text-left">이몽룡</td>
              <td className="py-3 px-6 text-center">
                <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">처리중</span>
              </td>
              <td className="py-3 px-6 text-center">₩200,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
