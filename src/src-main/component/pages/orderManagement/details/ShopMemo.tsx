import React, { useState } from 'react';

function ShopMemo() {
  // 상태 관리
  const [adminMemo, setAdminMemo] = useState('');
  const [vendorMemo, setVendorMemo] = useState('');

  const handleSubmit = () => {
    // 제출 로직을 여기에 추가
    console.log('관리자 메모:', adminMemo);
    console.log('벤더사 메모:', vendorMemo);
  };

  return (
    <div className="container mx-auto p-6 bg-white">
      {/* 상점메모 (관리자) */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">상점메모 (관리자)</h1>
        <textarea
          value={adminMemo}
          onChange={(e) => setAdminMemo(e.target.value)}
          rows={6}
          className="w-full border p-2"
        />
      </div>

      {/* 상점메모 (벤더사) */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">상점메모 (벤더사)</h1>
        <textarea
          value={vendorMemo}
          onChange={(e) => setVendorMemo(e.target.value)}
          rows={6}
          className="w-full border p-2"
        />
      </div>

      {/* 수정하기 버튼 */}
      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-gray-300 px-4 py-2 rounded border"
        >
          수정하기
        </button>
      </div>
    </div>
  );
}

export default ShopMemo;
