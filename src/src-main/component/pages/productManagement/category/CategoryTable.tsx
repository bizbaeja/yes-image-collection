import React, { useState, useEffect } from "react";
import Pagination from "../../../common/Pagination";
import Modal from "./Modal";

function CategoryTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [categoryCode, setCategoryCode] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [categories, setCategories] = useState<{
    available: boolean; code: string; name: string; level: number 
}[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 한 페이지에 표시할 항목 수
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    const dummyData = [
      { code: "10", name: "식품", level: 1, available: true },
      { code: "1010", name: "정육", level: 2, available: true },
      { code: "1020", name: "수산/건어물", level: 2, available: true },
    ];
    setCategories(dummyData);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 신규 등록 및 하위 등록, 수정 시 데이터 추가
  const handleSubmit = (code: any, name: any, available: any) => {
    const newCategory = {
      code,
      name,
      level: modalTitle === '하위분류 추가' ? 2 : 1, // 하위분류인 경우 level 2로
      available
    };

    setCategories([...categories, newCategory]); // 기존 데이터에 새 데이터 추가
    closeModal(); // 모달 닫기
  };

  const openModal = (title: React.SetStateAction<string>, code = '', name = '', available = true) => {
    setModalTitle(title);
    setCategoryCode(code);
    setCategoryName(name);
    setIsAvailable(available);
    setIsModalOpen(true);
  };

  const handleDelete = (code: string) => {
    const updatedCategories = categories.filter(category => category.code !== code);
    setCategories(updatedCategories);
  };

  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <select className="border border-gray-300 rounded px-2 py-1">
          <option>분류코드</option>
        </select>
        <div>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 mr-2"
            placeholder="검색어 입력"
          />
          <button onClick={() => openModal('신규 등록', '', '', true)} className="bg-gray-800 text-white px-4 py-1 rounded">
            검색
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-gray-500">
              <th className="border border-gray-300 flex justify-center px-4 py-2">
                신규등록
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">분류코드</th>
              <th className="border border-gray-300 px-4 py-2 text-left">분류명</th>
              <th className="border border-gray-300 px-4 py-2 text-center">판매가능</th>
              <th className="border border-gray-300 px-4 py-2 text-center">상품보기</th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.map((category) => (
              <tr key={category.code} className="border-b border-gray-300">
                <td className="border border-gray-300 flex justify-center px-4 py-2">
                  <button onClick={() => openModal('수정', category.code, category.name, category.available)} className="px-2 text-orange-500 border-orange-500 border-2 py-1 mr-2">수정</button>
                  <button onClick={() => handleDelete(category.code)} className="px-2 text-red-500 border-red-500 border-2 py-1 mr-2">삭제</button>
                  <button onClick={() => openModal('하위분류 추가', category.code, '', true)} className="px-2 py-1 text-blue-500 border-blue-500 border-2">하위</button>
                </td>
                <td className="border border-gray-300 px-4 py-2">{category.code}</td>
                <td
                  className="border border-gray-300 px-4 py-2"
                  style={{ paddingLeft: `${category.level * 20}px` }}
                >
                  {category.level > 1 && <span className="text-gray-400 mr-2">└</span>}
                  {category.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input type="checkbox" defaultChecked={category.available} className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-gray-800 text-white px-7 py-1">보기</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <Modal
          title={modalTitle}
          categoryCode={categoryCode}
          categoryName={categoryName}
          isAvailable={isAvailable}
          onClose={closeModal}
          onSubmit={handleSubmit} // 모달에서 제출된 데이터 받기
        />
      )}

      {/* 페이지네이션 */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFirstLast={true}
        showPrevNext={true}
        maxPageButtons={5}
      />
    </div>
  );
}

export default CategoryTable;