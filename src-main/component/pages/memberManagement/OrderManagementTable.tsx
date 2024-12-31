import React from 'react';

function OrderManagementTable() {
  // 테이블 데이터 (사진 속 데이터 전체 포함)
  const tableData = [
    { category: "주문관리", menu: "전체주문조회", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "과거주문조회", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "입금대기관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "배송준비중관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "배송대기관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "배송중관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "배송완료조회", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "입금전취소관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "취소관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "교환관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "반품관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "환불관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "카드취소관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "주문관리", menu: "관리자환불관리", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">주문 관리</h1>
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
                  <input type="radio" name={`menuExposure-${index}`} value="O" checked={row.menuExposure === "O"} /> O
                </label>
                <label>
                  <input type="radio" name={`menuExposure-${index}`} value="X" checked={row.menuExposure === "X"} /> X
                </label>
              </td>
              <td className="p-2 border">
                <label>
                  <input type="radio" name={`viewPermission-${index}`} value="O" checked={row.viewPermission === "O"} /> O
                </label>
                <label>
                  <input type="radio" name={`viewPermission-${index}`} value="X" checked={row.viewPermission === "X"} /> X
                </label>
              </td>
              <td className="p-2 border">
                <label>
                  <input type="radio" name={`editPermission-${index}`} value="O" checked={row.editPermission === "O"} /> O
                </label>
                <label>
                  <input type="radio" name={`editPermission-${index}`} value="X" checked={row.editPermission === "X"} /> X
                </label>
              </td>
              <td className="p-2 border">{row.deletePermission}</td>
              <td className="p-2 border">
                <label>
                  <input type="radio" name={`downloadPermission-${index}`} value="O" checked={row.downloadPermission === "O"} /> O
                </label>
                <label>
                  <input type="radio" name={`downloadPermission-${index}`} value="X" checked={row.downloadPermission === "X"} /> X
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderManagementTable;
