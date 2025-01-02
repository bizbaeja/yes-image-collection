import React from 'react';

function SettlementManagementTable() {
  // 두 번째 사진에 있는 테이블 데이터
  const tableData = [
    { category: "통계", menu: "일별매출", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "통계", menu: "주별매출", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "통계", menu: "월별매출", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "통계", menu: "결제수단별매출", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "통계", menu: "판매사별매출", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품분석", menu: "판매상품순위", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품분석", menu: "판매사별순위", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품분석", menu: "취소반품순위", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "상품분석", menu: "세부판매사순위", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "사이트분석", menu: "상단NICEITEM", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "사이트분석", menu: "하단FOCUSITEM", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "고객분석", menu: "요일별분석", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "고객분석", menu: "시간별분석", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "고객분석", menu: "배송지역별분석", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "고객분석", menu: "포인트별분석", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "고객분석", menu: "접속통계", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "고객분석", menu: "가입자별통계", menuExposure: "O", viewPermission: "O", editPermission: "X", deletePermission: "해당없음", downloadPermission: "O" },
    { category: "쇼핑몰설정", menu: "환경설정", menuExposure: "해당없음", viewPermission: "해당없음", editPermission: "해당없음", deletePermission: "해당없음", downloadPermission: "해당없음" },
    { category: "쇼핑몰설정", menu: "부운영자등록", menuExposure: "해당없음", viewPermission: "해당없음", editPermission: "해당없음", deletePermission: "해당없음", downloadPermission: "해당없음" },
    { category: "쇼핑몰설정", menu: "부운영자권한관리", menuExposure: "해당없음", viewPermission: "해당없음", editPermission: "해당없음", deletePermission: "해당없음", downloadPermission: "해당없음" },
    { category: "쇼핑몰설정", menu: "로그삭제패스워드설정", menuExposure: "해당없음", viewPermission: "해당없음", editPermission: "해당없음", deletePermission: "해당없음", downloadPermission: "해당없음" },
  ];

  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">통계 설정</h1>
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

export default SettlementManagementTable;
