import React from 'react';

function ShippingInfo() {
  // 예시 데이터
  const shippingData = {
    receiverName: '전현정',
    receiverPhone: '010-8819-1506',
    receiverLandline: '02-8819-1506',
    receiverAddress: '(06968) 서울 동작구 상도1동 501호(상도1동)',
    ordererName: '전현정',
    ordererPhone: '010-8819-1506',
    shippingMessage: '배송 메시지',
    entranceMethod: '(자유출입가능)',
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      {/* 배송정보 */}
      <h1 className="text-2xl font-bold mb-4">배송정보</h1>
      <table className="table-auto w-full border-collapse border mb-6">
        <tbody>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">받는 분</td>
            <td className="p-2">{shippingData.receiverName}</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">받는 분 휴대폰</td>
            <td className="p-2">{shippingData.receiverPhone}</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">받는 분 유선전화</td>
            <td className="p-2">{shippingData.receiverLandline}</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">받는 분 주소</td>
            <td className="p-2">{shippingData.receiverAddress}</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">주문자</td>
            <td className="p-2">{shippingData.ordererName}</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">주문자 휴대폰</td>
            <td className="p-2">{shippingData.ordererPhone}</td>
          </tr>
        </tbody>
      </table>

      {/* 배송 요청사항 */}
      <h1 className="text-2xl font-bold mb-4">배송 요청사항</h1>
      <table className="table-auto w-full border-collapse border mb-6">
        <tbody>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">배송 메시지</td>
            <td className="p-2">{shippingData.shippingMessage}</td>
          </tr>
          <tr className="border">
            <td className="p-2 bg-gray-100 font-bold">공동현관 출입방법</td>
            <td className="p-2">{shippingData.entranceMethod}</td>
          </tr>
        </tbody>
      </table>

      {/* 버튼 */}
      <div className="flex justify-center">
        <button className="bg-gray-300 px-4 py-2 border rounded">
          목록보기
        </button>
      </div>
    </div>
  );
}

export default ShippingInfo;
