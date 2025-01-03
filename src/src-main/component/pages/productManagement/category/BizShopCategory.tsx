import React, { useState, useEffect } from "react";
import Pagination from "../../../common/Pagination";
import { useLocation } from "react-router-dom";
import SubHeader from "../SubHeader";

function BizShopCategory({  }) {
  const location = useLocation();
  const [categories, setCategories] = useState<{ code: string; name: string; level: number }[]>([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newBannerImage, setNewBannerImage] = useState<string | null>(null); // 신규 또는 수정할 카테고리 배너 이미지 상태
  const [editingCategoryCode, setEditingCategoryCode] = useState(null); // 수정 중인 카테고리 코드
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bannerImages, setBannerImages] = useState<{ [key: string]: string | null }>({}); // 배너 이미지를 저장하는 상태
  const itemsPerPage = 5;

  useEffect(() => {
    const dummyData = [
      { code: "10", name: "나이스샵 LG 특가전", level: 1 },
      { code: "1010", name: "삼성전자 나이스샵 종합 기획전", level: 2 },
      { code: "1020", name: "2024 나이스샵 추석 선물 기획전", level: 2 },
      { code: "20", name: "스타벅스 MD 상품", level: 1 },
      { code: "2010", name: "나이스아이템", level: 2 },
    ];
    setCategories(dummyData);
  }, [location.pathname]);

  // 카테고리 추가
  const addCategory = () => {
    const newCode = generateNewCode(null, 1);
    const newCategory = {
      code: newCode,
      name: newCategoryName,
      level: 1,
    };

    setCategories([...categories, newCategory]);
    setBannerImages({
      ...bannerImages,
      [newCode]: newBannerImage, // 신규 카테고리의 배너 이미지 등록
    });
    setNewCategoryName("");
    setNewBannerImage(null); // 배너 이미지 초기화
    setIsAddingNewCategory(false);
  };

  // 카테고리 수정 시작
  const startEditingCategory = (category: { code: any; name: any; level?: number; }) => {
    setEditingCategoryCode(category.code);
    setNewCategoryName(category.name);
    setNewBannerImage(bannerImages[category.code] || null); // 기존 배너 이미지 설정
  };

  // 카테고리 수정 저장
  const saveCategory = (categoryCode: string) => {
    const updatedCategories = categories.map((category) =>
      category.code === categoryCode
        ? { ...category, name: newCategoryName }
        : category
    );
    setCategories(updatedCategories);
    setBannerImages({
      ...bannerImages,
      [categoryCode]: newBannerImage, // 수정된 배너 이미지 반영
    });
    setEditingCategoryCode(null); // 수정 완료 후 초기화
    setNewCategoryName("");
    setNewBannerImage(null);
  };

  // 배너 이미지 업로드 핸들러
  const handleNewBannerImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setNewBannerImage(URL.createObjectURL(file)); // 새 카테고리의 배너 이미지 미리보기 설정
    }
  };

  const generateNewCode = (parentCode: string | null, level: number) => {
    const siblingCategories = categories.filter(cat => 
      (parentCode ? cat.code.startsWith(parentCode) : cat.code.length === 2) && cat.level === level
    );
    const lastSiblingCode = siblingCategories.length > 0 
      ? Math.max(...siblingCategories.map(cat => parseInt(cat.code.slice(-2))))
      : 0;
    return parentCode 
      ? `${parentCode}${(lastSiblingCode + 1).toString().padStart(2, '0')}`
      : `${(lastSiblingCode + 1).toString().padStart(2, '0')}`;
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full mx-auto p-4">
      <SubHeader title="BIZ SHOP 분류관리" />
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
          <button className="bg-gray-800 text-white px-4 py-1 rounded">검색</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-t-2 border-gray-500">
              <th className="border border-gray-300 px-4 py-2 text-left">수정/삭제</th>
              <th className="border border-gray-300 px-4 py-2 text-left">분류코드</th>
              <th className="border border-gray-300 px-4 py-2 text-left"></th>
              <th className="border border-gray-300 px-4 py-2 text-center"></th>
              <th className="border border-gray-300 px-4 py-2 text-center"></th>
              <th className="border border-gray-300 px-4 py-2 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.map((category) => (
              <React.Fragment key={category.code}>
                <tr>
                  <td className="border flex justify-center border-gray-300 px-4 py-2">
                    {editingCategoryCode === category.code ? (
                      <>
                        <button
                          className="bg-white text-gray-800 border border-gray-300 px-2 py-1 mr-1"
                          onClick={() => saveCategory(category.code)} // 저장
                        >
                          저장
                        </button>
                        <button
                          className="bg-white text-red-500 border border-red-500 px-2 py-1 mr-1"
                          onClick={() => setEditingCategoryCode(null)} // 취소
                        >
                          취소
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="bg-white text-gray-800 border border-gray-300 px-2 py-1 mr-1"
                          onClick={() => startEditingCategory(category)} // 수정 시작
                        >
                          수정
                        </button>
                        <button className="bg-white text-orange-500 border border-orange-500 px-2 py-1 mr-1">
                          삭제
                        </button>
                      </>
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{category.code}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {editingCategoryCode === category.code ? (
                      <>
                        <input
                          type="file"
                          onChange={handleNewBannerImageUpload}
                          className="mb-2"
                        />
                        {newBannerImage && (
                          <img
                            src={newBannerImage}
                            alt="Edit Banner Preview"
                            className="max-w-xs mb-2"
                          />
                        )}
                      </>
                    ) : (
                      bannerImages[category.code] && (
                        <img
                          src={bannerImages[category.code] || undefined}
                          alt="Banner Preview"
                          className="max-w-xs mb-2"
                        />
                      )
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {editingCategoryCode === category.code ? (
                      <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      category.name
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button className="bg-gray-800 text-white px-7 py-1">보기</button>
                  </td>
                </tr>
              </React.Fragment>
            ))}

            {/* 신규 카테고리 추가 폼 */}
            {isAddingNewCategory && (
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    className="bg-white text-gray-800 border border-gray-300 px-2 py-1 rounded"
                    onClick={addCategory}
                  >
                    추가
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2"></td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="file"
                    onChange={handleNewBannerImageUpload}
                    className="mb-2"
                  />
                  {newBannerImage && (
                    <img src={newBannerImage} alt="New Banner Preview" className="max-w-xs mb-2" />
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="새 분류명"
                    className="border border-gray-300 rounded px-2 py-1"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center">
        <button className="bg-gray-600 text-white px-4 py-2">일괄수정</button>
      </div>

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

export default BizShopCategory;
