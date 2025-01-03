import React, { useState } from "react";

function ProductSearchForm() {
  const [productType, setProductType] = useState("상품명");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category1, setCategory1] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [category4, setCategory4] = useState("");
  const [status, setStatus] = useState({
    selling: false,
    soldOut: false,
    waiting: false,
    approved: false,
    pending: false,
    rejected: false,
    refunded: false,
  });

  const handleStatusChange = (e) => {
    setStatus({ ...status, [e.target.name]: e.target.checked });
  };

  const handleSubmit = () => {
    // 검색 로직을 여기에 작성합니다.
    console.log("Form submitted");
  };

  return (

      <div className="container  mx-auto p-6  bg-white">
        <table className="table-auto w-full mb-6 border-collapse">
          <tbody>
            {/* 상품검색 */}
            <tr className="border w-full ">
              <td className="p-2 bg-gray-100 text-lg font-bold min-w-[250px]">상품검색</td>
              <td className="p-2" colSpan="5">
                <div className="flex">
                  <select
                    className="border px-4 py-2 mr-4"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                  >
                    <option value="상품명">상품명</option>
                    <option value="상품코드">상품코드</option>
                    <option value="판매사">판매사</option>
                    <option value="판매자">판매자</option>
                    <option value="관리자">관리자</option>
                  </select>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-4 py-2 w-full"
                    placeholder="검색어를 입력해주세요"
                  />
                </div>
              </td>
            </tr>

            {/* 기간 */}
            <tr className="border">
              <td className="p-2 bg-gray-100 text-lg font-bold">기간</td>
              <td className="p-2" colSpan="5">
                <div className="flex ">
                  <select className="border px-4 py-2">
                    <option value="상품등록일">상품등록일</option>
                  </select>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border px-4 py-2"
                  />
                  <span className="py-2">~</span>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border px-4 py-2"
                  />
                  <button className="border  min-w-[80px] ">오늘</button>
                  <button className="border min-w-[80px]">1주</button>
                  <button className="border min-w-[80px]">15일</button>
                  <button className="border  min-w-[80px]">1개월</button>
                  <button className="border min-w-[80px]">3개월</button>
                  <button className="border  min-w-[80px]">6개월</button>
                </div>
              </td>
            </tr>

            {/* 카테고리 */}
            <tr className="border">
              <td className="p-2 bg-gray-100 text-lg font-bold">카테고리</td>
              <td className="p-2" colSpan="5">
                <div className="flex space-x-4">
                  <select
                    className="border px-4 py-2"
                    value={category1}
                    onChange={(e) => setCategory1(e.target.value)}
                  >
                    <option value="">1차분류</option>
                  </select>
                  <select
                    className="border px-4 py-2"
                    value={category2}
                    onChange={(e) => setCategory2(e.target.value)}
                  >
                    <option value="">2차분류</option>
                  </select>
                  <select
                    className="border px-4 py-2"
                    value={category3}
                    onChange={(e) => setCategory3(e.target.value)}
                  >
                    <option value="">3차분류</option>
                  </select>
                  <select
                    className="border px-4 py-2"
                    value={category4}
                    onChange={(e) => setCategory4(e.target.value)}
                  >
                    <option value="">4차분류</option>
                  </select>
                </div>
              </td>
            </tr>

            {/* 판매상태 */}
            <tr className="border">
              <td className="p-2 bg-gray-100 text-lg font-bold">판매상태</td>
              <td className="p-2" colSpan="5">
                <div className="flex space-x-4">
                  <label>
                    <input
                      type="checkbox"
                      name="selling"
                      checked={status.selling}
                      onChange={handleStatusChange}
                    />{" "}
                    판매중
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="soldOut"
                      checked={status.soldOut}
                      onChange={handleStatusChange}
                    />{" "}
                    임시품절
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="waiting"
                      checked={status.waiting}
                      onChange={handleStatusChange}
                    />{" "}
                    승인대기
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="approved"
                      checked={status.approved}
                      onChange={handleStatusChange}
                    />{" "}
                    승인거부
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="pending"
                      checked={status.pending}
                      onChange={handleStatusChange}
                    />{" "}
                    수정대기
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="rejected"
                      checked={status.rejected}
                      onChange={handleStatusChange}
                    />{" "}
                    수정거부
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="refunded"
                      checked={status.refunded}
                      onChange={handleStatusChange}
                    />{" "}
                    반려
                  </label>
                </div>
              </td>
            </tr>

            {/* 진열여부 */}
            <tr className="border">
              <td className="p-2 bg-gray-100 text-lg font-bold">진열여부</td>
              <td className="p-2" colSpan="5">
                <div className="flex space-x-4">
                  <label>
                    <input type="checkbox" /> 진열함
                  </label>
                  <label>
                    <input type="checkbox" /> 진열안함
                  </label>
                </div>
              </td>
            </tr>

            {/* 판매사 */}
            <tr className="border">
              <td className="p-2 bg-gray-100 text-lg font-bold">판매사</td>
              <td className="p-2" colSpan="5">
                <input
                  type="text"
                  className="border px-4 py-2 w-full"
                  placeholder="검색어를 입력해주세요"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* 버튼 섹션 */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSubmit}
            className="bg-gray-500 text-white px-11 py-2 rounded"
          >
            검색
          </button>
          <button
            onClick={() => setStartDate("")}
            className="bg-white border-2 text-gray-500 font-bold px-11 py-2 rounded"
          >
            초기화
          </button>
          <button className="text-gray-600 px-4 py-2">
            <img
              src="/images/excel.webp"
              className="w-6 h-6 inline-block mr-3"
              alt="엑셀 아이콘"
            />
            전체다운로드
          </button>
        </div>
      </div>

  );
}

export default ProductSearchForm;
