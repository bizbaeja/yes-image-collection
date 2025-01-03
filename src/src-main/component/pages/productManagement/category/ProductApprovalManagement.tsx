import React, { useState, useEffect } from 'react';
import { utils, writeFile } from 'xlsx';
import Pagination from '../../../common/Pagination';

function ProductApprovalManagement() {
  interface Category {
    id: number;
    code: string;
    name: string;
    category: string;
    saleStatus: string;
    stock: number;
    displayStatus: string;
    registrationDate: string;
  }

  const [categories, setCategories] = useState<Category[]>([]);
  const [displayType, setDisplayType] = useState('전체상품');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    // 실제 API 호출로 대체해야 합니다.
    const dummyData = [
      { id: 1, code: 'P001', name: '상품1', category: '카테고리1', saleStatus: '판매중', stock: 100, displayStatus: '진열중', registrationDate: '2023-05-01' },
      { id: 2, code: 'P002', name: '상품2', category: '카테고리2', saleStatus: '품절', stock: 0, displayStatus: '미진열', registrationDate: '2023-05-02' },
      // ... 더 많은 더미 데이터
    ];
    setCategories(dummyData);
  }, []);

  const handleSearch = () => {
    // 실제 검색 로직을 구현합니다.
    console.log('검색 실행:', { displayType, searchCategory, searchStatus, searchKeyword, startDate, endDate });
  };

  const handleExcelDownload = () => {
    const ws = utils.json_to_sheet(categories);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Categories");
    writeFile(wb, "categories.xlsx");
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4 w-full">
  <table className="table-auto w-full border-collapse">
  <tbody>
    {/* 상단 필터 */}
    <tr className="border-b">
      <td className="p-2" colSpan={2}>
        <div className="flex items-center">
          <label className="mr-4">
            <input type="radio" name="displayType" value="전체상품" checked={displayType === '전체상품'} onChange={(e) => setDisplayType(e.target.value)} />
            전체상품
          </label>
          <label className="mr-4">
            <input type="radio" name="displayType" value="진열상품" checked={displayType === '진열상품'} onChange={(e) => setDisplayType(e.target.value)} />
            진열상품
          </label>
          <label>
            <input type="radio" name="displayType" value="미진열상품" checked={displayType === '미진열상품'} onChange={(e) => setDisplayType(e.target.value)} />
            미진열상품
          </label>
        </div>
      </td>
      <td className="p-2 text-right">
        <span>건수: 1107</span>
      </td>
    </tr>

    {/* 검색 필터 */}
    <tr className="border-b">
      <td className="p-2">
        <div className="flex space-x-2">
          <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} className="border p-2">
            <option value="">전체분류</option>
            <option value="category1">카테고리1</option>
            <option value="category2">카테고리2</option>
          </select>
          <select value={searchStatus} onChange={(e) => setSearchStatus(e.target.value)} className="border p-2">
            <option value="">상품명</option>
            <option value="status1">상태1</option>
            <option value="status2">상태2</option>
          </select>
          <select className="border p-2">
            <option>수정대기</option>
            <option>수정완료</option>
          </select>
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="border p-2"
          />
          <button onClick={handleSearch} className="bg-black text-white px-4 py-2">
            검색
          </button>
        </div>
      </td>

      {/* 등록일 필터 */}
      <td className="p-2">
        <div className="flex items-center space-x-2">
          <span>등록일:</span>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border p-2"
          />
          <span>~</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border p-2"
          />
        </div>
      </td>
    </tr>
  </tbody>
</table>


      <table className="w-full border-collapse border">
        <thead className='border-t-2 border-gray-500'>
          <tr className="bg-gray-200">
            <th className="border p-2">선택</th>
            <th className="border p-2">번호</th>
            <th className="border p-2">상품코드</th>
            <th className="border p-2">상품명</th>
            <th className="border p-2">카테고리</th>
            <th className="border p-2">판매상태</th>
            <th className="border p-2">재고</th>
            <th className="border p-2">진열상태</th>
            <th className="border p-2">등록일</th>
          </tr>
        </thead>
        <tbody>
          {displayedCategories.map((category) => (
            <tr key={category.id}>
              <td className="border p-2"><input type="checkbox" /></td>
              <td className="border p-2">{category.id}</td>
              <td className="border p-2">{category.code}</td>
              <td className="border p-2">{category.name}</td>
              <td className="border p-2">{category.category}</td>
              <td className="border p-2">{category.saleStatus}</td>
              <td className="border p-2">{category.stock}</td>
              <td className="border p-2">{category.displayStatus}</td>
              <td className="border p-2">{category.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showFirstLast={true}
        showPrevNext={true}
        maxPageButtons={5}
      />
    </div>
  );
}

export default ProductApprovalManagement;