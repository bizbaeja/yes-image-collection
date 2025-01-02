import React, { useState } from 'react';

function OrderTable() {
  // 예시 데이터
  const initialOrderData = [
    {
      image: '/images/focusItem/item1.jpg',
      productName: '[예약판매] 신세계 모바일 교환권 5,000원 (재발송불가)',
      option: '옵션 : ★모바일 교환권은 수령인 [휴대폰]에 입력된 번호로 발송됩니다.★',
      manageCode: 'SSG_GIFTCARD_115',
      category: '쿠폰, 교환권',
      seller: 'nicednr01',
      productCode: '9b1c8fe3c0',
      memberId: 'abyz2001',
      status: '결제완료',
      supplyPrice: '4,000',
      salePrice: '4,500',
      quantity: 2,
      subtotal: '9,000',
      cancel: '취소하기'
    }
  ];

  const [orderData, setOrderData] = useState(initialOrderData);

  // 항목 삭제 함수
  const handleCancel = (index: number) => {
    const updatedOrderData = orderData.filter((_, i) => i !== index);
    setOrderData(updatedOrderData);
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">주문상품</h1>

      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="border">
            <th className="p-2 border bg-gray-100">상품명</th>
            <th className="p-2 border bg-gray-100">관리코드</th>
            <th className="p-2 border bg-gray-100">카테고리</th>
            <th className="p-2 border bg-gray-100">판매자</th>
            <th className="p-2 border bg-gray-100">상품코드</th>
            <th className="p-2 border bg-gray-100">회원ID</th>
            <th className="p-2 border bg-gray-100">상태</th>
            <th className="p-2 border bg-gray-100">공급가</th>
            <th className="p-2 border bg-gray-100">판매가</th>
            <th className="p-2 border bg-gray-100">수량</th>
            <th className="p-2 border bg-gray-100">소계</th>
            <th className="p-2 border bg-gray-100">취소</th>
          </tr>
        </thead>
        <tbody>
          {orderData.length > 0 ? (
            orderData.map((order, index) => (
              <tr key={index} className="border">
                {/* 상품 정보 */}
                <td className="p-2 border flex items-start">
                  <img
                    src={order.image}
                    alt={order.productName}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <p>{order.productName}</p>
                    <p className="text-gray-500 text-sm">{order.option}</p>
                  </div>
                </td>
                
                <td className="p-2 border">{order.manageCode}</td>
                <td className="p-2 border">{order.category}</td>
                <td className="p-2 border">{order.seller}</td>
                <td className="p-2 border">{order.productCode}</td>
                <td className="p-2 border">{order.memberId}</td>
                <td className="p-2 border">{order.status}</td>
                <td className="p-2 border">{order.supplyPrice}</td>
                <td className="p-2 border">{order.salePrice}</td>
                <td className="p-2 border">{order.quantity}</td>
                <td className="p-2 border">{order.subtotal}</td>
                <td
                  className="p-2 border text-red-500 cursor-pointer"
                  onClick={() => handleCancel(index)}
                >
                  {order.cancel}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="p-2 text-center">
                주문 내역이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 주문 합계 */}
      <div className="mt-4 text-right font-bold">
        주문합계: {orderData.reduce((sum, order) => sum + parseInt(order.subtotal, 10), 0).toLocaleString()}원
      </div>
    </div>
  );
}

export default OrderTable;
