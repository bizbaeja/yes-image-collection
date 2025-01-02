import React, { useState } from 'react';

function PaymentDetailInfo() {
  // 상태 관리
  const [shippingCompany, setShippingCompany] = useState('');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shippingTime, setShippingTime] = useState('');
  const [currentTime, setCurrentTime] = useState(false);

  const handleSubmit = () => {
    // 제출 로직을 여기에 추가
    console.log('수정하기 버튼 클릭');
  };

  const handleListView = () => {
    // 목록보기 로직 추가
    console.log('목록보기 버튼 클릭');
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">결제상세정보</h1>

      <table className="table-auto w-full border-collapse border">
        <tbody>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">PG TID</td>
            <td className="p-2">niceshop2m0101240925152742900</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">배송회사</td>
            <td className="p-2">
              <select
                value={shippingCompany}
                onChange={(e) => setShippingCompany(e.target.value)}
                className="w-full border p-2"
              >
                <option value="">배송사 선택하세요.</option>
                <option value="CJ대한통운">CJ대한통운</option>
                <option value="한진택배">한진택배</option>
                <option value="롯데택배">롯데택배</option>
              </select>
            </td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">운송장번호</td>
            <td className="p-2">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full border px-2 py-1"
                placeholder="운송장번호 입력"
              />
            </td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">배송일시</td>
            <td className="p-2">
              <div className="flex items-center">
                <input
                  type="datetime-local"
                  value={shippingTime}
                  onChange={(e) => setShippingTime(e.target.value)}
                  className="w-full border px-2 py-1"
                />
                <label className="ml-4">
                  <input
                    type="checkbox"
                    checked={currentTime}
                    onChange={() => setCurrentTime(!currentTime)}
                  />
                  <span className="ml-1">현재 시간</span>
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 버튼 영역 */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handleSubmit}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          수정하기
        </button>
        <button
          onClick={handleListView}
          className="bg-white border-2 border-gray-500 text-gray-500 font-bold px-4 py-2 rounded"
        >
          목록보기
        </button>
      </div>
    </div>
  );
}

export default PaymentDetailInfo;
