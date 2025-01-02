import React from 'react';

function PaymentDetails() {
  // 예시 데이터
  const paymentData = {
    orderNumber: '47287ea46514',
    trackingNumber: '5222389e9579_1',
    paymentMethod: '신용카드',
    pointAmount: '0원',
    couponAmount: '0원',
    shippingFee: '0원',
    totalOrderAmount: '9,000원',
    actualPaymentAmount: '9,000원',
    totalPaymentAmount: '9,000원',
    cancellationAmount: '0원',
    orderTime: '2024-09-25 15:27:56',
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">주문결제</h1>

      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="border">
            <th className="p-2 border bg-gray-100">주문번호</th>
            <th className="p-2 border bg-gray-100">송장번호전용 주문번호</th>
            <th className="p-2 border bg-gray-100">결제방법</th>
            <th className="p-2 border bg-gray-100">포인트 결제액</th>
            <th className="p-2 border bg-gray-100">쿠폰 결제액</th>
            <th className="p-2 border bg-gray-100">배송비</th>
            <th className="p-2 border bg-gray-100">주문총액</th>
            <th className="p-2 border bg-gray-100">실 결제금액</th>
            <th className="p-2 border bg-gray-100">총 결제액 (포인트, 쿠폰 포함)</th>
            <th className="p-2 border bg-gray-100">주문취소</th>
            <th className="p-2 border bg-gray-100">주문시간</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-2 border">{paymentData.orderNumber}</td>
            <td className="p-2 border">{paymentData.trackingNumber}</td>
            <td className="p-2 border">{paymentData.paymentMethod}</td>
            <td className="p-2 border">{paymentData.pointAmount}</td>
            <td className="p-2 border">{paymentData.couponAmount}</td>
            <td className="p-2 border">{paymentData.shippingFee}</td>
            <td className="p-2 border">{paymentData.totalOrderAmount}</td>
            <td className="p-2 border">{paymentData.actualPaymentAmount}</td>
            <td className="p-2 border">{paymentData.totalPaymentAmount}</td>
            <td className="p-2 border">{paymentData.cancellationAmount}</td>
            <td className="p-2 border">{paymentData.orderTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PaymentDetails;
