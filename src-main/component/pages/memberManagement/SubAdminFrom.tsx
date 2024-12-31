import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";

const SubAdminForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    address: "",
    postcode: "",
    phoneNumber: "",
    mobileNumber: "",
    email: "",
    homepage: "",
    birthYear: "1924",
    birthMonth: "01",
    birthDay: "01",
    gender: "남",
    receiveEmail: false,
    receiveSms: false,
    adminNote: "",
    userGrade: "부관리자",
    joinDate: "2023-07-10",
    visitCount: 0,
  });

  const [isPostcodeModalOpen, setPostcodeModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCompletePostcode = (data: any) => {
    setFormData({
      ...formData,
      postcode: data.zonecode,
      address: data.address,
    });
    setPostcodeModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">부운영자 등록</h1>
      <form onSubmit={handleSubmit}>
        <table className="w-full border-collapse border mb-6">
          <tbody>
            {/* 아이디 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">아이디</td>
              <td className="p-2">
                <input
                  type="text"
                  name="userId"
                  value={formData.userId}
                  onChange={handleChange}
                  placeholder="영문 또는 영문+숫자 5자 이상 ~ 15자 이하"
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 이름 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">이름</td>
              <td className="p-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 닉네임 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">닉네임</td>
              <td className="p-2">
                <input
                  type="text"
                  name="nickname"
                  value={formData.nickname}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 비밀번호 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">비밀번호</td>
              <td className="p-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="영문+숫자+특수문자 5자 이상 ~ 20자 이하"
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 비밀번호 확인 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">비밀번호 확인</td>
              <td className="p-2">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 주소 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">주소</td>
              <td className="p-2">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="우편번호"
                    readOnly
                    className="w-1/3 border p-2"
                  />
                  <button
                    type="button"
                    onClick={() => setPostcodeModalOpen(true)}
                    className="bg-gray-500 text-white px-4 py-2"
                  >
                    우편번호검색
                  </button>
                </div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="주소"
                  className="w-full border p-2 mt-2"
                />
              </td>
            </tr>
            {/* 전화번호 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">전화번호</td>
              <td className="p-2">
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 핸드폰번호 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">핸드폰번호</td>
              <td className="p-2">
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 이메일 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">이메일</td>
              <td className="p-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2"
                />
              </td>
            </tr>
            {/* 생년월일 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">생년월일</td>
              <td className="p-2 flex space-x-2">
                <select
                  name="birthYear"
                  value={formData.birthYear}
                  onChange={handleChange}
                  className="border p-2"
                >
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i} value={1924 + i}>
                      {1924 + i}
                    </option>
                  ))}
                </select>
                <select
                  name="birthMonth"
                  value={formData.birthMonth}
                  onChange={handleChange}
                  className="border p-2"
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  name="birthDay"
                  value={formData.birthDay}
                  onChange={handleChange}
                  className="border p-2"
                >
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            {/* 성별 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">성별</td>
              <td className="p-2">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="남"
                    checked={formData.gender === "남"}
                    onChange={handleChange}
                  />{" "}
                  남
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="gender"
                    value="여"
                    checked={formData.gender === "여"}
                    onChange={handleChange}
                  />{" "}
                  여
                </label>
              </td>
            </tr>
            {/* 알림 수신 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">알림 수신</td>
              <td className="p-2">
                <label className="mr-4">
                  <input
                    type="checkbox"
                    name="receiveEmail"
                    checked={formData.receiveEmail}
                    onChange={handleChange}
                  />{" "}
                  이메일 수신
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="receiveSms"
                    checked={formData.receiveSms}
                    onChange={handleChange}
                  />{" "}
                  SMS 수신
                </label>
              </td>
            </tr>
            {/* 관리자 메모 */}
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">관리자 메모</td>
              <td className="p-2">
                <textarea
                  name="adminNote"
                  value={formData.adminNote}
                  onChange={handleChange}
                  className="w-full border p-2"
                  rows={3}
                  placeholder="관리자 메모를 입력하세요"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* 회원정보 요약 */}
        <table className="w-full border-collapse border mb-6">
          <tbody>
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">회원등급</td>
              <td className="p-2">{formData.userGrade}</td>
            </tr>
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">가입일자</td>
              <td className="p-2">{formData.joinDate}</td>
            </tr>
            <tr>
              <td className="p-2 bg-gray-100 text-sm font-bold">접속횟수</td>
              <td className="p-2">{formData.visitCount}</td>
            </tr>
          </tbody>
        </table>

        {/* 버튼 */}
        <div className="flex justify-end space-x-4">
          <button type="button" className="bg-gray-500 text-white px-4 py-2">
            목록보기
          </button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            등록하기
          </button>
        </div>
      </form>

      {/* 우편번호 검색 모달 */}
      {isPostcodeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setPostcodeModalOpen(false)}
            >
              닫기
            </button>
            <DaumPostcode onComplete={handleCompletePostcode} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubAdminForm;
