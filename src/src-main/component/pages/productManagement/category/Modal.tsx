import React, { useState } from 'react';

interface ModalProps {
  title: string;
  categoryCode: string;
  categoryName: string;
  isAvailable: boolean;
  onClose: () => void;
  onSubmit: (categoryCode: string, categoryName: string, isAvailable: boolean) => void;
}

function Modal({ title, categoryCode, categoryName, isAvailable, onClose, onSubmit }: ModalProps) {
  const [newCategoryCode, setNewCategoryCode] = useState(categoryCode);
  const [newCategoryName, setNewCategoryName] = useState(categoryName);
  const [available, setAvailable] = useState(isAvailable);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit(newCategoryCode, newCategoryName, available); // 입력된 데이터를 부모 컴포넌트로 전달
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 w-1/2">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">분류코드</label>
            <input
              type="text"
              value={newCategoryCode}
              onChange={(e) => setNewCategoryCode(e.target.value)}
              className="border p-2 w-full"
              placeholder="분류코드를 입력하세요"
              readOnly={title !== "신규 등록"} // 신규 등록일 때만 수정 가능
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">분류명</label>
            <input
              type="text"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="border p-2 w-full"
              placeholder="분류명을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">판매가능</label>
            <input
              type="checkbox"
              checked={available}
              onChange={() => setAvailable(!available)}
              className="mr-2"
            />
            체크하셔야 페이지에서 보입니다.
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-gray-600 text-white px-4 py-2 rounded">글올리기</button>
            <button type="button" onClick={onClose} className="bg-black text-white px-4 py-2 rounded">목록보기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
