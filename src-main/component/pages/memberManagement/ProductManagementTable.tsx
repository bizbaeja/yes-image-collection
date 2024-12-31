import React, { useState } from "react";

type PermissionType = "menuExposure" | "viewPermission" | "editPermission" | "deletePermission" | "downloadPermission";

interface TableRow {
  category: string;
  menu: string;
  menuExposure: string;
  viewPermission: string;
  editPermission: string;
  deletePermission: string;
  downloadPermission: string;
}

const ProductManagementTable: React.FC = () => {
  // 테이블 데이터 상태 관리
  const [tableData, setTableData] = useState<TableRow[]>([
    { category: "상품목록", menu: "전체상품목록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품목록", menu: "관리자상품목록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품목록", menu: "판매사상품목록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품등록", menu: "관리자개별등록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품등록", menu: "판매사개별등록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품등록", menu: "대량등록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품등록", menu: "도서산간지역등록", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "분류관리", menu: "분류관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "분류관리", menu: "MDPICK분류관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "분류관리", menu: "브랜드정보보기분류관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "분류관리", menu: "이달의신상분류관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "분류관리", menu: "기획전분류관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "분류관리", menu: "BIZ샵분류관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
  ]);

  // 권한 변경 핸들러
  const handlePermissionChange = (index: number, permissionType: PermissionType, value: string) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][permissionType] = value;
    setTableData(updatedTableData);
  };

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">상품 관리 권한 설정</h1>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border">
            <th className="p-2 border">상단바메뉴</th>
            <th className="p-2 border">좌측메뉴</th>
            <th className="p-2 border">메뉴노출여부</th>
            <th className="p-2 border">조회권한</th>
            <th className="p-2 border">수정권한</th>
            <th className="p-2 border">삭제권한</th>
            <th className="p-2 border">자료다운</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="text-center border">
              <td className="p-2 border">{row.category}</td>
              <td className="p-2 border">{row.menu}</td>
              <td className="p-2 border">
                <label>
                  <input
                    type="radio"
                    name={`menuExposure-${index}`}
                    value="O"
                    checked={row.menuExposure === "O"}
                    onChange={() => handlePermissionChange(index, "menuExposure", "O")}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`menuExposure-${index}`}
                    value="X"
                    checked={row.menuExposure === "X"}
                    onChange={() => handlePermissionChange(index, "menuExposure", "X")}
                  /> X
                </label>
              </td>
              <td className="p-2 border">
                <label>
                  <input
                    type="radio"
                    name={`viewPermission-${index}`}
                    value="O"
                    checked={row.viewPermission === "O"}
                    onChange={() => handlePermissionChange(index, "viewPermission", "O")}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`viewPermission-${index}`}
                    value="X"
                    checked={row.viewPermission === "X"}
                    onChange={() => handlePermissionChange(index, "viewPermission", "X")}
                  /> X
                </label>
              </td>
              <td className="p-2 border">
                <label>
                  <input
                    type="radio"
                    name={`editPermission-${index}`}
                    value="O"
                    checked={row.editPermission === "O"}
                    onChange={() => handlePermissionChange(index, "editPermission", "O")}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`editPermission-${index}`}
                    value="X"
                    checked={row.editPermission === "X"}
                    onChange={() => handlePermissionChange(index, "editPermission", "X")}
                  /> X
                </label>
              </td>
              <td className="p-2 border">{row.deletePermission}</td>
              <td className="p-2 border">
                <label>
                  <input
                    type="radio"
                    name={`downloadPermission-${index}`}
                    value="O"
                    checked={row.downloadPermission === "O"}
                    onChange={() => handlePermissionChange(index, "downloadPermission", "O")}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`downloadPermission-${index}`}
                    value="X"
                    checked={row.downloadPermission === "X"}
                    onChange={() => handlePermissionChange(index, "downloadPermission", "X")}
                  /> X
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementTable;
