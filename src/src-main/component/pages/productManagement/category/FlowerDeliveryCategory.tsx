import React, { useState, useEffect } from "react";
import Pagination from "../../../common/Pagination";
import { useLocation } from "react-router-dom";
import SubHeader from "../SubHeader";

function FlowerDeliveryCategory() {
  const location = useLocation();
  const [categories, setCategories] = useState<{ code: string; name: string; level: number }[]>([]);
  const [editingCategoryCode, setEditingCategoryCode] = useState<string>(""); // 수정할 카테고리 코드
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newBannerImage, setNewBannerImage] = useState<string | null>(null); // 신규 또는 수정할 카테고리 배너 이미지 상태
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [bannerImages, setBannerImages] = useState<{ [key: string]: string | null }>({}); // 배너 이미지를 저장하는 상태
  const itemsPerPage = 5;

  useEffect(() => {
    const dummyData = [
      { code: "10", name: "장미꽃", level: 1 },
      { code: "1010", name: "튤립꽃", level: 2 },
      { code: "1020", name: "해바라기꽃", level: 2 },
    ];
    setCategories(dummyData);
  }, [location.pathname]);

  // 신규 카테고리 추가
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
      [newCode]: newBannerImage,
    });
    setNewCategoryName("");
    setNewBannerImage(null);
    setIsAddingNewCategory(false);
  };

  // 수정 시작
  const startEditingCategory = (category: { code: any; name: any; level?: number; }) => {
    setEditingCategoryCode(category.code);
    setNewCategoryName(category.name); // 기존 이름을 입력 필드에 넣음
    setNewBannerImage(bannerImages[category.code]); // 기존 배너 이미지를 미리 보기
  };

  // 수정 완료 후 저장
  const saveCategory = () => {
    const updatedCategories = categories.map((category) =>
      category.code === editingCategoryCode
        ? { ...category, name: newCategoryName }
        : category
    );

    setCategories(updatedCategories);
    setBannerImages({
      ...bannerImages,
      [editingCategoryCode]: newBannerImage, // 수정된 배너 이미지 저장
    });
    setEditingCategoryCode(""); // 수정 완료 후 초기화
    setNewCategoryName("");
    setNewBannerImage(null);
  };

  // 수정 취소
  const cancelEdit = () => {
    setEditingCategoryCode("");
    setNewCategoryName("");
    setNewBannerImage(null);
  };

  // 배너 이미지 업로드 처리
  const handleBannerImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setNewBannerImage(URL.createObjectURL(file)); // 이미지 미리 보기 설정
    }
  };

  const generateNewCode = (parentCode: string | null, level: number) => {
    const siblingCategories = categories.filter((cat) =>
      parentCode ? cat.code.startsWith(parentCode) : cat.code.length === 2
    );
    const lastSiblingCode =
      siblingCategories.length > 0
        ? Math.max(...siblingCategories.map((cat) => parseInt(cat.code.slice(-2))))
        : 0;
    return parentCode
      ? `${parentCode}${(lastSiblingCode + 1).toString().padStart(2, "0")}`
      : `${(lastSiblingCode + 1).toString().padStart(2, "0")}`;
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full mx-auto p-4">
      <SubHeader title="꽃배달 분류관리" />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 border-t-2 border-gray-500">
              <th className="border border-gray-300 px-4 py-2 text-center">수정/삭제</th>
              <th className="border border-gray-300 px-4 py-2 text-left">분류코드</th>
              <th className="border border-gray-300 px-4 py-2 text-left">배너이미지</th>
              <th className="border border-gray-300 px-4 py-2 text-center">분류명</th>
              <th className="border border-gray-300 px-4 py-2 text-center">판매가능</th>
            </tr>
          </thead>
          <tbody>
            {displayedCategories.map((category) => (
              <tr key={category.code}>

                <td className="border border-gray-300 px-4 py-2">
                  {editingCategoryCode === category.code ? (
                    <>
                      <button
                        onClick={saveCategory}
                        className="text-orange-500 border-2 border-orange-500 px-2 py-1 rounded mr-2"
                      >
                        저장
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="text-gray-500 border-2 border-gray-500 px-2 py-1 rounded"
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEditingCategory(category)}
                        className="text-orange-500 border-2 border-orange-500 px-2 py-1 rounded mr-2"
                      >
                        수정
                      </button>
                      <button className="text-gray-500 border-2 border-gray-500 px-2 py-1 rounded">삭제</button>
                    </>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {category.code}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {editingCategoryCode === category.code ? (
                    <>
                      <input type="file" onChange={handleBannerImageUpload} />
                      {newBannerImage && (
                        <img src={newBannerImage} alt="Preview" className="max-w-xs" />
                      )}
                    </>
                  ) : (
                    bannerImages[category.code] != null && (
                      <img src={bannerImages[category.code] as string} alt="Banner Preview" className="max-w-xs" />
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
                  <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 border-2 border-gray-500 text-red-500" />
                </td>
              </tr>
            ))}
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

export default FlowerDeliveryCategory;
