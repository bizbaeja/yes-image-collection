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

const PromotionManagementTable: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>([
    { category: "쿠폰관리", menu: "쿠폰만들기", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "쿠폰관리", menu: "쿠폰발급", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "쿠폰관리", menu: "쿠폰대량발급", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "쿠폰관리", menu: "쿠폰조회", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "쿠폰관리", menu: "시리얼쿠폰발급", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "쿠폰관리", menu: "시리얼쿠폰조회", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "탑배너관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "롤링이미지관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "이달의신상이미지관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "중단배너관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "상단NICEITEM이미지관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "하단FOCUSITEM이미지관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "배너관리", menu: "서브페이지이미지관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
  ]);

  const handlePermissionChange = (index: number, permissionType: PermissionType, value: string) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][permissionType] = value;
    setTableData(updatedTableData);
  };

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">프로모션 관리 권한 설정</h1>
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
                    onChange={() => handlePermissionChange(index, "menuExposure", "O")}
                    checked={row.menuExposure === "O"}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`menuExposure-${index}`}
                    value="X"
                    onChange={() => handlePermissionChange(index, "menuExposure", "X")}
                    checked={row.menuExposure === "X"}
                  /> X
                </label>
              </td>
              <td className="p-2 border">
                <label>
                  <input
                    type="radio"
                    name={`viewPermission-${index}`}
                    value="O"
                    onChange={() => handlePermissionChange(index, "viewPermission", "O")}
                    checked={row.viewPermission === "O"}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`viewPermission-${index}`}
                    value="X"
                    onChange={() => handlePermissionChange(index, "viewPermission", "X")}
                    checked={row.viewPermission === "X"}
                  /> X
                </label>
              </td>
              <td className="p-2 border">
                <label>
                  <input
                    type="radio"
                    name={`editPermission-${index}`}
                    value="O"
                    onChange={() => handlePermissionChange(index, "editPermission", "O")}
                    checked={row.editPermission === "O"}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`editPermission-${index}`}
                    value="X"
                    onChange={() => handlePermissionChange(index, "editPermission", "X")}
                    checked={row.editPermission === "X"}
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
                    onChange={() => handlePermissionChange(index, "downloadPermission", "O")}
                    checked={row.downloadPermission === "O"}
                  /> O
                </label>
                <label>
                  <input
                    type="radio"
                    name={`downloadPermission-${index}`}
                    value="X"
                    onChange={() => handlePermissionChange(index, "downloadPermission", "X")}
                    checked={row.downloadPermission === "X"}
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

export default PromotionManagementTable;
