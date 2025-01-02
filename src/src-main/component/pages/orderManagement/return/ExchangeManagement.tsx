import React, { useState } from "react";
import Pagination from "../../../common/Pagination";
import ExchangeCommonTable from "../../../common/ExchangeCommonTable";
import DetailModal from "./DetailModal"; // 모달 컴포넌트 임포트

function ExchangeManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 항목 상태
  const itemsPerPage = 10;
  
  const exchangeData = [
    // 예제 데이터
    {
      orderNumber: "a729184c8450",
      name: "홍승인",
      phone: "01080147444",
      email: "h170717@naver.com",
      registeredDate: "2024/05/29 14시",
      confirmation: "확인",
      processingDepartment: "처리완료",
      status: "취소완료",
    },
    // 추가 데이터...
  ];

  const totalPages = Math.ceil(exchangeData.length / itemsPerPage);
  const currentData = exchangeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleConfirmClick = (item) => {
    console.log("확인 버튼 클릭됨:", item); // 추가된 로그
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null); // 모달 닫기
  };

  const columns = [
    { header: "비고", accessor: null, renderActions: true },
    { header: "주문번호", accessor: "orderNumber" },
    { header: "이름", accessor: "name" },
    { header: "휴대전화", accessor: "phone" },
    { header: "이메일", accessor: "email" },
    { header: "등록일", accessor: "registeredDate" },
    { header: "확인여부", accessor: "confirmation" },
    { header: "처리여부", accessor: "processingDepartment" },
    { header: "상태", accessor: "status" },
  ];

  const renderActions = (item) => (
    <div>
         <button
     className="text-orange-500 font-bold border-2 border-orange-500 px-4 py-1 rounded mr-2"
     onClick={() => handleConfirmClick(item)} // 확인 버튼 클릭 시 모달 열기
   >
     확인
   </button>
      <button className="text-gray-500 font-bold border-2 border-gray-500 px-4 py-1 rounded">
        삭제
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">교환관리</h1>

      <ExchangeCommonTable
        columns={columns}
        data={currentData}
        renderActions={renderActions}
      />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFirstLast={true}
        showPrevNext={true}
        maxPageButtons={5}
      />

      {selectedItem && (
        <DetailModal
          isOpen={!!selectedItem} // selectedItem이 있을 때 모달 열기
          onClose={handleCloseModal} // 모달 닫기 핸들러
          data={selectedItem} // 선택된 데이터 전달
        />
      )}
    </div>
  );
}

export default ExchangeManagement;