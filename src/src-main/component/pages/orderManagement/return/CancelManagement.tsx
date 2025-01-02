
import React, { useState } from "react";
import Inquery from "../../../common/Inquery";
import OrderList from "../../../common/OrderList";
import Breadcrumb from "../../../common/BreadCrumb";
function CancelManagement() {
  // 상태 관리
  const [orderDetails, setOrderDetails] = useState({
    orderNumber: "",
    productCode: "",
    productName: "",
    managerCode: "",
    customerName: "",
    customerID: "",
    customerContact: "",
    receiverName: "",
    trackingNumber: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // 여기에 파일 업로드 로직 추가
    } else {
      alert('파일을 선택해 주세요.');
    }
  };
  // 날짜 범위 상태 관리
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 입력 변경 핸들러
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // 제출 핸들러 (검색 로직 추가 가능)
  const handleSubmit = () => {
    console.log("Search Criteria: ", orderDetails);
    // 검색 로직 추가
  };

  return (
    <div>
         <Breadcrumb  />
      <Inquery
        orderDetails={orderDetails} // 입력 데이터를 Inquery에 전달
        handleChange={handleChange} // 입력 변경 핸들러를 Inquery에 전달
        handleSubmit={handleSubmit} // 제출 핸들러를 Inquery에 전달
        startDate={startDate} // 시작 날짜를 Inquery에 전달
        endDate={endDate} // 종료 날짜를 Inquery에 전달
        setStartDate={setStartDate} // 시작 날짜 설정 함수 전달
        setEndDate={setEndDate} // 종료 날짜 설정 함수 전달
        title="취소 관리"
      />
   
      <div className="container mx-auto p-6 bg-white">
        <div className="border-b-2 border-gray-500">
        <h1 className="text-3xl font-bold mb-6">송장번호 대량등록</h1>
        </div>

      
      {/* 테이블 레이아웃 */}
      <table className="table-auto w-full mb-6 border-collapse border">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2 font-bold">엑셀 파일</th>
            <th className="text-left p-2">파일 선택</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <a href="#" className="text-blue-500 underline">[양식 파일 다운로드]</a>
            </td>
            <td className="p-2">
              <input type="file" onChange={handleFileChange} />
              <span className="ml-2 text-gray-500">{selectedFile ? selectedFile.name : '선택된 파일 없음'}</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* 업로드 버튼 */}
      <div className="text-center">
        <button 
          onClick={handleUpload} 
          className="border border-black px-4 py-2 mt-4 hover:bg-gray-200"
        >
          업로드
        </button>
      </div>
    </div>
    <OrderList />
    </div>
  );
}

export default CancelManagement;
