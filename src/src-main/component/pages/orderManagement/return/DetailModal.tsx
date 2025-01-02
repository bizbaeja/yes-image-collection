import React from "react";

function DetailModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl">
        <button className="mb-4 text-right" onClick={onClose}>
          닫기
        </button>
        <h2 className="text-2xl font-bold mb-4">신청내용 보기</h2>
        <div className="mb-4">
          <p><strong>주문번호:</strong> {data.orderNumber}</p>
          <p><strong>이름:</strong> {data.name}</p>
          <p><strong>휴대전화:</strong> {data.phone}</p>
          <p><strong>이메일:</strong> {data.email}</p>
          <p><strong>신청내용:</strong> {data.request}</p>
          <p><strong>처리완료여부:</strong> <input type="checkbox" checked={data.isProcessed} readOnly /></p>
        </div>
        <p><strong>등록일:</strong> {data.registeredDate}</p>
        <p><strong>관리메모:</strong></p>
        <textarea
          className="w-full border p-2 rounded mb-4"
          placeholder="관리 메모를 입력하세요"
          value={data.memo}
          readOnly
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            수정하기
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onClose}>
            목록보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;