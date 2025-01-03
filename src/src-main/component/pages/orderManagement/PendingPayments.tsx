import React, { useState } from "react";
import Inquery from "../../common/Inquery";
import Breadcrumb from "../../common/BreadCrumb";
import PaymentTable from "./PaymentTable";

function PendingPayments() {
  // 상태 관리
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: "",
    productCode: "",
    productName: "",
    managerCode: "",
    customerName: "",
    customerID: "",
    customerContact: "",
    receiverName: "",
    trackingNumber: "",
  });

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 입력 변경 핸들러
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // 제출 핸들러 (검색 로직 추가 가능)
  const handleSubmit = () => {
    console.log("Search Criteria: ", orderDetails);
  };

  return (
    <div className="w-full">
      <Breadcrumb />
      <div className="container mx-auto p-4 sm:p-6 bg-white">
        {/* 검색 영역 */}
        <Inquery
          orderDetails={orderDetails}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          title="입금전 관리"
        />
      </div>

      {/* 주문 관리 테이블 */}
      <PaymentTable />
    </div>
  );
}

export default PendingPayments;
