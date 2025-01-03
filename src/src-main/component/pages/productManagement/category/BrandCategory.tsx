import React, { useState, useEffect } from "react";
import Pagination from "../../../common/Pagination"; // 페이지네이션 컴포넌트 import
import { useLocation } from "react-router-dom"; // URL 경로에 따른 페이지 구분
import SubHeader from "../SubHeader";
import Modal from "./Modal"; // 공통 모달 컴포넌트 import

function BrandCategory() {
  const location = useLocation(); // 현재 URL 경로를 가져옴
  const [categories, setCategories] = useState<{ code: string; name: string; level: number }[]>([]);
  const [editingParentCode, setEditingParentCode] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const [modalTitle, setModalTitle] = useState('');
  const [categoryCode, setCategoryCode] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 한 페이지에 표시할 항목 수
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    // 브랜드 카테고리에 맞는 목데이터 추가:
    const dummyBrandCategories = [
      { code: "30", name: "패션", level: 1 },
      { code: "3010", name: "의류", level: 2 },
      { code: "3020", name: "잡화", level: 2 },
      { code: "3030", name: "신발", level: 2 },
      { code: "3040", name: "가방", level: 2 },
      { code: "3050", name: "악세사리", level: 2 },
      { code: "40", name: "전자제품", level: 1 },
      { code: "4010", name: "컴퓨터", level: 2 },
      { code: "4020", name: "모바일", level: 2 },
    ];

    setCategories(dummyBrandCategories); // 실제로는 API에서 가져오겠지만, 목데이터로 시작
  }, [location.pathname]);

  const openModal = (title: React.SetStateAction<string>, code = '', name = '', available = true) => {
    setModalTitle(title);
    setCategoryCode(code);
    setCategoryName(name);
    setIsAvailable(available);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 카테고리 추가 처리
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

  const addCategory = (parentCode: string) => {
    const parentCategory = categories.find((cat) => cat.code === parentCode);
    const newLevel = parentCategory ? parentCategory.level + 1 : 1;
    const newCode = generateNewCode(parentCode, newLevel);

    const newCategory = {
      code: newCode,
      name: categoryName,
      level: newLevel,
    };

    setCategories([...categories, newCategory]);
    setEditingParentCode(null);
  };

  const generateNewCode = (parentCode: string, level: number) => {
    const siblingCategories = categories.filter(
      (cat) => cat.code.startsWith(parentCode) && cat.level === level
    );
    const lastSiblingCode =
      siblingCategories.length > 0
        ? Math.max(
            ...siblingCategories.map((cat) => parseInt(cat.code.slice(-2)))
          )
        : 0;
    return `${parentCode}${(lastSiblingCode + 1).toString().padStart(2, "0")}`;
  };

  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full mx-auto p-4">
      <SubHeader title="브랜드 장보기" />
      <div className="mb-4 flex justify-between items-center">
        <select className="border border-gray-300 rounded px-2 py-1">
          <option>브랜드 코드</option>
        </select>
        <div>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-1 mr-2"
            placeholder="검색어 입력"
          />
          <button className="bg-gray-800 text-white px-4 py-1 rounded">
            검색
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-t-2 border-gray-500">
              <th className="border border-gray-300 flex justify-center px-4 py-2 text-left">
                <button 
                  onClick={() => openModal('신규 등록', '', '', true)} 
                  className="px-3 border py-1 bg-gray-600 text-white"
                >
                  신규등록
                </button>
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
              
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
              
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
            
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
             
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="border border-gray-300 text-center py-4"
                >
                  등록된 상품이 없습니다.
                </td>
              </tr>
            ) : (
              displayedCategories.map((category) => (
                <React.Fragment key={category.code}>
                  <tr>
                    <td className="border flex justify-center border-gray-300 px-4 py-2">
                      <button
                        className="bg-white text-gray-800 border border-gray-300 px-2 py-1 mr-1"
                        onClick={() => openModal('수정', category.code, category.name, true)}
                      >
                        수정
                      </button>
                      <button
                        className="bg-white text-orange-500 border border-orange-500 px-2 py-1 mr-1"
                        onClick={() => setCategories(categories.filter((cat) => cat.code !== category.code))}
                      >
                        삭제
                      </button>
                      <button
                        className="bg-white text-blue-400 border border-blue-400 px-2 py-1"
                        onClick={() => openModal('하위분류 추가', category.code, '', true)}
                      >
                        하위
                      </button>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {category.code}
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      style={{ paddingLeft: `${category.level * 20}px` }}
                    >
                      {category.level > 1 && (
                        <span className="text-gray-400 mr-2">└</span>
                      )}
                      {category.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button className="bg-gray-800 text-white px-7 py-1">
                        보기
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))
            )}
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

      {/* 일괄수정 버튼 */}
      <div className="mt-4 flex justify-center">
        <button className="bg-gray-600 text-white px-4 py-2 ">일괄수정</button>
      </div>

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

export default BrandCategory;
