import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubAdminAuthorityManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const subAdmins = [
    {
      id: 1,
      userId: "manager02",
      name: "시원스쿨",
      nickname: "관리자",
      authorityChangeDate: "2024-04-03",
      joinDate: "2024-03-26",
      lastLoginDate: "2024-04-03",
      infoUpdateDate: "0000-00-00",
      visitCount: 1,
    },
    {
      id: 2,
      userId: "manager01",
      name: "KIS정보통신",
      nickname: "부운영자",
      authorityChangeDate: "2023-10-23",
      joinDate: "2023-07-12",
      lastLoginDate: "2024-03-26",
      infoUpdateDate: "0000-00-00",
      visitCount: 8,
    },
    {
      id: 3,
      userId: "admin1",
      name: "부관리자1",
      nickname: "부관리자11",
      authorityChangeDate: "2023-10-23",
      joinDate: "2023-07-10",
      lastLoginDate: "2024-10-11",
      infoUpdateDate: "0000-00-00",
      visitCount: 16,
    },
  ];

  const handleAuthorityClick = (adminId: number) => {
    navigate(`/admin/sub-admin-authority-management/${adminId}`);

  };
  
  return (
    <div className="p-6 bg-white">
      <h1 className="text-2xl font-bold mb-6">가입일</h1>

      {/* 검색 필터 */}
      <div className="flex space-x-4 mb-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 w-1/4"
        />
        <span className="text-lg">~</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2 w-1/4"
        />
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 w-1/3"
        />
        <button className="bg-black text-white px-4 py-2">검색</button>
      </div>

      {/* 테이블 */}
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border">
            <th className="p-2 border"></th>
            <th className="p-2 border">아이디</th>
            <th className="p-2 border">이름</th>
            <th className="p-2 border">닉네임</th>
            <th className="p-2 border">권한변경일</th>
            <th className="p-2 border">가입일</th>
            <th className="p-2 border">최근접속일</th>
            <th className="p-2 border">정보수정일</th>
            <th className="p-2 border">방문횟수</th>
          </tr>
        </thead>
        <tbody>
          {subAdmins.map((admin) => (
            <tr key={admin.id} className="text-center border">
              <td className="p-2 border">
                <button
                  className="border-2 border-black px-4 py-2"
                  onClick={() => handleAuthorityClick(admin.id)}
                >
                  권한
                </button>
              </td>
              <td className="p-2 border">{admin.userId}</td>
              <td className="p-2 border">{admin.name}</td>
              <td className="p-2 border">{admin.nickname}</td>
              <td className="p-2 border">{admin.authorityChangeDate}</td>
              <td className="p-2 border">{admin.joinDate}</td>
              <td className="p-2 border">{admin.lastLoginDate}</td>
              <td className="p-2 border">{admin.infoUpdateDate}</td>
              <td className="p-2 border">{admin.visitCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubAdminAuthorityManagement;
