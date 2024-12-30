import React, { useState } from "react";

const SubAdminRegister: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    mobile: "",
    email: "",
    homepage: "",
    birthYear: "1924",
    birthMonth: "01",
    birthDay: "01",
    gender: "",
    alertEmail: false,
    alertSMS: false,
    memo: "",
    grade: "부관리자",
    joinDate: "2023-07-10",
    visitCount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("부운영자 등록이 완료되었습니다.");
  };

  return (
    <div className="p-6 bg-white border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">부운영자 등록</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* 아이디 */}
          <label className="col-span-1 font-semibold text-gray-600">아이디</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="영문 또는 영문+숫자 5자 이상 ~ 15자 이하"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 이름 */}
          <label className="col-span-1 font-semibold text-gray-600">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="이름을 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 닉네임 */}
          <label className="col-span-1 font-semibold text-gray-600">닉네임</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            placeholder="닉네임을 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 비밀번호 */}
          <label className="col-span-1 font-semibold text-gray-600">비밀번호</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="영문+숫자+특수문자 5자 이상 ~ 20자 이하"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 비밀번호 확인 */}
          <label className="col-span-1 font-semibold text-gray-600">비밀번호 확인</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 주소 */}
          <label className="col-span-1 font-semibold text-gray-600">주소</label>
          <div className="col-span-2 flex space-x-2">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="주소를 입력하세요"
              className="flex-grow border rounded px-4 py-2"
            />
            <button type="button" className="bg-gray-200 px-4 py-2 rounded border">
              우편번호검색
            </button>
          </div>

          {/* 전화번호 */}
          <label className="col-span-1 font-semibold text-gray-600">전화번호</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="전화번호를 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 핸드폰 */}
          <label className="col-span-1 font-semibold text-gray-600">핸드폰</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="핸드폰 번호를 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 이메일 */}
          <label className="col-span-1 font-semibold text-gray-600">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 홈페이지 */}
          <label className="col-span-1 font-semibold text-gray-600">홈페이지</label>
          <input
            type="text"
            name="homepage"
            value={formData.homepage}
            onChange={handleChange}
            placeholder="홈페이지 주소를 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          />

          {/* 생년월일 */}
          <label className="col-span-1 font-semibold text-gray-600">생년월일</label>
          <div className="col-span-2 flex space-x-2">
            <select name="birthYear" value={formData.birthYear} onChange={handleChange} className="border rounded px-4 py-2">
              {Array.from({ length: 100 }, (_, i) => 1924 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} className="border rounded px-4 py-2">
              {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select name="birthDay" value={formData.birthDay} onChange={handleChange} className="border rounded px-4 py-2">
              {Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, "0")).map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>

          {/* 성별 */}
          <label className="col-span-1 font-semibold text-gray-600">성별</label>
          <div className="col-span-2 flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="gender"
                value="남"
                checked={formData.gender === "남"}
                onChange={handleChange}
                className="mr-2"
              />
              남
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="여"
                checked={formData.gender === "여"}
                onChange={handleChange}
                className="mr-2"
              />
              여
            </label>
          </div>

          {/* 알림 수신 */}
          <label className="col-span-1 font-semibold text-gray-600">알림 수신</label>
          <div className="col-span-2 flex items-center space-x-4">
            <label>
              <input
                type="checkbox"
                name="alertEmail"
                checked={formData.alertEmail}
                onChange={handleChange}
                className="mr-2"
              />
              이메일 수신
            </label>
            <label>
              <input
                type="checkbox"
                name="alertSMS"
                checked={formData.alertSMS}
                onChange={handleChange}
                className="mr-2"
              />
              SMS 수신
            </label>
          </div>

          {/* 메모 */}
          <label className="col-span-1 font-semibold text-gray-600">관리자 메모</label>
          <textarea
            name="memo"
            value={formData.memo}
            onChange={handleChange}
            placeholder="관리자 메모를 입력하세요"
            className="col-span-2 border rounded px-4 py-2"
          ></textarea>

          {/* 회원등급 */}
          <label className="col-span-1 font-semibold text-gray-600">회원등급</label>
          <div className="col-span-2 text-gray-800">{formData.grade}</div>

          {/* 가입일자 */}
          <label className="col-span-1 font-semibold text-gray-600">가입일자</label>
          <div className="col-span-2 text-gray-800">{formData.joinDate}</div>

          {/* 접속 횟수 */}
          <label className="col-span-1 font-semibold text-gray-600">접속 횟수</label>
          <div className="col-span-2 text-gray-800">{formData.visitCount}</div>
        </div>

        {/* 등록하기, 목록보기 버튼 */}
        <div className="flex justify-end space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            등록하기
          </button>
          <button type="button" className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
            목록보기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubAdminRegister;
