import React, { useState } from "react";
import Pagination from "../../../common/Pagination"; // 페이지네이션 컴포넌트 임포트
import ExchangeCommonTable from "../../../common/ExchangeCommonTable";
import DetailModal from "./DetailModal"; // 모달 컴포넌트 임포트

function ReturnManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 항목 상태
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수
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
    // ... 추가 데이터 ...
  ];

  const totalPages = Math.ceil(exchangeData.length / itemsPerPage);
  const currentData = exchangeData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 상태 렌더링
  const renderStatus = (item: { status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => {
    if (item.status === "취소완료") {
      return <span>{item.status}</span>;
    }

    return (
      <div className="flex items-center space-x-2">
        <select className="border px-2 py-1">
          <option value="구매확정" selected={item.status === "구매확정"}>구매확정</option>
          <option value="반품요청" selected={item.status === "반품요청"}>반품요청</option>
          <option value="교환요청" selected={item.status === "교환요청"}>교환요청</option>
          <option value="환불요청" selected={item.status === "환불요청"}>환불요청</option>
        </select>
        <input type="checkbox" className="border px-2 py-1" />
      </div>
    );
  };

  // 액션 버튼 렌더링
  const renderActions = (item: React.SetStateAction<null>) => (
    <div className="whitespace-nowrap">
      <button
        className="text-orange-500 whitespace-nowrap font-bold border-2 border-orange-500 px-4 py-1 rounded mr-2"
        onClick={() => setSelectedItem(item)} // 확인 버튼 클릭 시 모달 열기
      >
        확인
      </button>
      <button className="text-gray-500 whitespace-nowrap font-bold border-2 border-gray-500 px-4 py-1 rounded">
        삭제
      </button>
    </div>
  );

  const columns = [
    { header: "비고", accessor: undefined, renderActions: renderActions },
    { header: "주문번호", accessor: "orderNumber" },
    { header: "이름", accessor: "name" },
    { header: "휴대전화", accessor: "phone" },
    { header: "이메일", accessor: "email" },
    { header: "등록일", accessor: "registeredDate" },
    { header: "확인여부", accessor: "confirmation" },
    { header: "처리여부", accessor: "processingDepartment" },
    { header: "상태", accessor: undefined, renderStatus }, // Custom render for status
  ];

  const handleCloseModal = () => {
    setSelectedItem(null); // 모달 닫기
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">반품관리</h1>

      {/* 검색 영역 */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <select className="border px-4 py-2">
            <option value="orderNumber">주문번호</option>
            <option value="name">이름</option>
            <option value="email">이메일</option>
          </select>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="border px-4 py-2 mr-2"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded">검색</button>
        </div>
      </div>

      {/* 테이블 */}
      <ExchangeCommonTable
        columns={columns}
        data={currentData}
        renderActions={renderActions}
      />

      {/* 페이지네이션 */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFirstLast={true}
        showPrevNext={true}
        maxPageButtons={5}
      />

      {/* 일괄수정 버튼 */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">일괄수정</button>
      </div>

      {/* 모달 렌더링 */}
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

export default ReturnManagement;