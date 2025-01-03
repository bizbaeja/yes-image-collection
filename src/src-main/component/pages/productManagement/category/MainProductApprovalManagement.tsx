import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import

function MainProductApprovalManagement() {
  const [activeTab, setActiveTab] = useState('NICE ITEM');
  const [filterType, setFilterType] = useState('code'); // 상품코드 또는 상품명 필터 선택
  const [searchKeyword, setSearchKeyword] = useState(''); // 필터 검색어 상태
  const [items, setItems] = useState<{ id: number; code: string; name: string; order: number; }[]>([]);
  const [editingItem, setEditingItem] = useState<{ id: number; code: string; name: string; order: number; } | null>(null);
  const navigate = useNavigate(); // useNavigate hook 사용

  const tabs = ['NICE ITEM', 'FOCUS ITEM', '상설특가', '이달의 신상', '브랜드 장보기', '오직 NICESHOP에서만', '베스트상품'];

  useEffect(() => {
    // Mock Data (API 호출로 대체 가능)
    const mockData = [
      { id: 1, code: '412cae2d0a', name: '[베트남향] 쌀국수면세트 러블리 / VB-SL1', order: 0 },
      { id: 2, code: '2e2e592891', name: '[버블비] 버블러 토탈넷 클린 항균 패드 1개입', order: 0 },
      { id: 3, code: '8e7a4eec62', name: '[세비] 에디션 화이트 그릴 ( JSK-N4007 )', order: 0 },
      { id: 4, code: '4a4ea3de45', name: '[락앤락] 휴대용 무선 믹서기 2L', order: 0 },
      { id: 5, code: 'abc6d6ed3c', name: '[아리얼] 엑스퍼트 골든 비타민씨 13 앰플', order: 0 },
    ];
    setItems(mockData);
  }, [activeTab]);

  const handleEdit = (item: { id: number; code: string; name: string; order: number; }) => {
    setEditingItem(item);
    navigate('/admin/product-management/product-list'); // 수정 버튼을 클릭하면 전체 상품 목록 페이지로 이동
  };

  const handleSave = (editedItem: { id: number; code: string; name: string; order: number; }) => {
    setItems(items.map(item => item.id === editedItem.id ? editedItem : item));
    setEditingItem(null);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  // 필터링된 항목 목록
  const filteredItems = items.filter(item => {
    if (filterType === 'code') {
      return item.code.includes(searchKeyword);
    } else if (filterType === 'name') {
      return item.name.includes(searchKeyword);
    }
    return true;
  });

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-4">메인 상품 관리</h1>

      {/* 탭 버튼 */}
      <div className="mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 mr-2 ${activeTab === tab ? 'bg-black text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 상품코드와 상품명 필터 선택 */}
      <div className="mb-4 flex space-x-4">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border p-2"
        >
          <option value="code">상품코드</option>
          <option value="name">상품명</option>
        </select>

        {/* 필터 검색어 입력 */}
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          placeholder={`${filterType === 'code' ? '상품코드' : '상품명'} 검색`}
          className="border p-2 w-full"
        />
      </div>

      {/* 테이블 */}
      <table className="w-full border-collapse border">
        <thead className='border-t-2 border-gray-500'>
          <tr className="bg-gray-100">
            <th className="border p-2">수정</th>
            <th className="border p-2">상품코드</th>
            <th className="border p-2">상품명</th>
            <th className="border p-2">순서</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td className="border p-2 ">
                {editingItem && editingItem.id === item.id ? (
                  <>
                    <button onClick={() => handleSave(editingItem)} className="bg-white text-blue-400 border border-blue-400 px-2 py-1 mr-2">저장</button>
                    <button onClick={handleCancel} className="bg-white text-orange-500 border border-orange-500 px-2 py-1 mr-1 ">취소</button>
                  </>
                ) : (
              
                  <button onClick={() => handleEdit(item)} className="bg-white text-gray-800 border border-gray-300 px-2 py-1 mr-1">수정</button>
                )}
              </td>
              <td className="border p-2">{item.code}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.order}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button className="bg-gray-500 text-white px-4 py-2">일괄수정</button>
      </div>
    </div>
  );
}

export default MainProductApprovalManagement;
