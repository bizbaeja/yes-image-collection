import React from "react";

interface User {
  id: string;
  name: string;
  nickname: string;
  grade: string;
  email: string;
  phone: string;
  joinDate: string;
  lastLoginDate: string;
  infoUpdateDate: string;
  visitCount: number;
}

const userData: User[] = [
  {
    id: "manager02",
    name: "시원스쿨",
    nickname: "관리자",
    grade: "부관리자",
    email: "manager02@example.com",
    phone: "010-1234-5678",
    joinDate: "2024-03-26",
    lastLoginDate: "2024-04-03",
    infoUpdateDate: "0000-00-00",
    visitCount: 1,
  },
  {
    id: "manager01",
    name: "KIS정보통신",
    nickname: "부운영자",
    grade: "부관리자",
    email: "--",
    phone: "--",
    joinDate: "2023-07-12",
    lastLoginDate: "2024-03-26",
    infoUpdateDate: "0000-00-00",
    visitCount: 8,
  },
  {
    id: "admin1",
    name: "부관리자1",
    nickname: "부관리자11",
    grade: "부관리자",
    email: "--",
    phone: "--",
    joinDate: "2023-07-10",
    lastLoginDate: "2024-10-10",
    infoUpdateDate: "0000-00-00",
    visitCount: 16,
  },
];

const UserInfoTable: React.FC = () => {
  return (
    <div className="p-6 bg-white border rounded shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">가입일</h2>
        <div className="flex items-center space-x-2">
          <input
            type="date"
            className="border rounded px-2 py-1 text-sm"
            placeholder="년-월-일"
          />
          <span>~</span>
          <input
            type="date"
            className="border rounded px-2 py-1 text-sm"
            placeholder="년-월-일"
          />
          <input
            type="text"
            className="border rounded px-2 py-1 text-sm"
            placeholder="이름을 입력해주세요"
          />
          <button className="bg-black text-white px-4 py-1 rounded text-sm">
            검색
          </button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 border-b">
          <th className="py-2 px-4 text-left"><button>신규등록</button></th>
            <th className="py-2 px-4 text-left">아이디</th>
            <th className="py-2 px-4 text-left">이름</th>
            <th className="py-2 px-4 text-left">닉네임</th>
            <th className="py-2 px-4 text-left">회원등급</th>
            <th className="py-2 px-4 text-left">이메일</th>
            <th className="py-2 px-4 text-left">핸드폰</th>
            <th className="py-2 px-4 text-left">가입일</th>
            <th className="py-2 px-4 text-left">최근접속일</th>
            <th className="py-2 px-4 text-left">정보수정일</th>
            <th className="py-2 px-4 text-left">방문횟수</th>
        
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 space-x-2">
              <div className="flex space-x-2"> 
            <button className="bg-orange-500 text-white px-2 py-1 whitespace-nowrap rounded text-sm">
              수정
            </button>
            <button className="bg-red-500 text-white px-2 py-1 whitespace-nowrap rounded text-sm">
              삭제
            </button>
          </div>
              </td>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.nickname}</td>
              <td className="py-2 px-4">{user.grade}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">{user.phone}</td>
              <td className="py-2 px-4">{user.joinDate}</td>
              <td className="py-2 px-4">{user.lastLoginDate}</td>
              <td className="py-2 px-4">{user.infoUpdateDate}</td>
              <td className="py-2 px-4">{user.visitCount}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoTable;
