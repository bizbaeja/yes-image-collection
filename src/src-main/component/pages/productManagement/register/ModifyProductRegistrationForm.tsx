import React, { useState } from "react";
import Editor from "./Editor";
interface Props {
  title: string;
}

function ModifyProductRegistrationForm({ title }: Props) {
  // 상태로 바이트 수를 관리
  const [byteCount, setByteCount] = useState(0);
  const maxBytes = 100; // 최대 바이트 수 설정
  const [content, setContent] = useState("<p>초기 콘텐츠입니다.</p>");
  interface Item {
    item: string;
    info: string;
    [key: string]: string;
  }
  
  const [items, setItems] = useState<Item[]>([{ item: "", info: "" }]);

  const handleContentChange = (updatedContent: React.SetStateAction<string>) => {
    setContent(updatedContent); // 변경된 콘텐츠 업데이트
  };
  const handleItemChange = (index: number, field: string, value: string) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { item: "", info: "" }]);
  };
  const [formData, setFormData] = useState({
    title: "전체 상품 등록",
    managerMemo: "",
    sellerMemo: "",
    shippingCategory: "",
    packagingInfo: "",
    returnExchangeMethod: "",
    returnExchangeTime: "",
    returnExchangeCost: "",
    returnExchangeNotAllowedReason: "",
    compensationForDamage: "",
    compensationForReturnDelay: "",
    displayStatus: "진열함",
    detailedMenu: "사용안함",
    categories: ["", "", "", ""],
    itemCode: "",
    managerCode: "",
    itemName: "",
    manufacturer: "",
    brand: "",
    taxType: "과세",
    productType: [],
    aiBox: [],
    origin: "",
    maxPurchasePerDay: "",
    maxPurchasePerID: "",
    isOnSale: "사용안함",
    salePrice: "",
    alternateSalePrice: "사용안함",
    purchasePrice: "",
    retailPrice: "",
    discountRate: "",
    pointUsage: {
      shop: "",
      welfare: "",
      etc: "",
    },
    deliveryFee: "",
    additionalDeliveryFee: {
      jeju: "",
      island: "",
    },
    stockQuantity: "",
    noteForDelivery: "",
    productDescription: "",
    imageList: [] as File[],
    viewImageLink: "",
    tags: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const checked = (e.target as HTMLInputElement).checked;
    // 입력된 값의 바이트 수 계산 (Blob 사용)
    const byteLength = new Blob([value]).size;
    setByteCount(byteLength);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // 입력 데이터 업데이트 (최대 바이트 초과 시 제한)
    if (byteLength <= maxBytes) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
 const handleClick = () => {
    console.log("추가 버튼 클릭");
 }
  const handleCategoryChange = (index: number, value: string) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[index] = value;
    setFormData({ ...formData, categories: updatedCategories });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <table className="table-auto w-full border-collapse">
        <tbody>
          {/* 진열 상태 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">진열상태</td>
            <td className="p-2">
              <label>
                <input
                  type="radio"
                  name="displayStatus"
                  value="진열함"
                  checked={formData.displayStatus === "진열함"}
                  onChange={handleInputChange}
                />{" "}
                진열함
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="displayStatus"
                  value="진열안함"
                  checked={formData.displayStatus === "진열안함"}
                  onChange={handleInputChange}
                />{" "}
                진열안함
              </label>
            </td>
          </tr>

          {/* 세부 메뉴 노출 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">세부 메뉴 노출</td>
            <td className="p-2">
              <label>
                <input
                  type="radio"
                  name="detailedMenu"
                  value="사용"
                  checked={formData.detailedMenu === "사용"}
                  onChange={handleInputChange}
                />{" "}
                사용
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="detailedMenu"
                  value="사용안함"
                  checked={formData.detailedMenu === "사용안함"}
                  onChange={handleInputChange}
                />{" "}
                사용안함
              </label>
            </td>
          </tr>

          {/* 카테고리 선택 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">카테고리</td>
            <td className="p-2">
              <div className="grid grid-cols-4 gap-2">
                {formData.categories.map((category, index) => (
                  <select
                    key={index}
                    value={category}
                    onChange={(e) =>
                      handleCategoryChange(index, e.target.value)
                    }
                    className="border p-2 w-full"
                  >
                    <option value="">분류명 선택</option>
                    <option value="category1">카테고리 1</option>
                    <option value="category2">카테고리 2</option>
                    <option value="category3">카테고리 3</option>
                  </select>
                ))}
              </div>
            </td>
          </tr>

          {/* 상품코드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">상품코드</td>
            <td className="p-2">
              <input
                type="text"
                name="itemCode"
                value={formData.itemCode}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* 상설특가관 분류관리 카테고리 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              상설특가관 분류관리 카테고리
            </td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>
          {/* 브랜드장보기 카테고리*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              브랜드장보기 카테고리
            </td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>
          {/* 이달의 신상 카테고리*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              이달의 신상 카테고리
            </td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>

          {/*     기획전 카테고리*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">기획전 카테고리</td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>
          {/*  BIZ샵 카테고리*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">BIZ샵 카테고리</td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>
          {/*나이스장터 카테고리*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              나이스장터 카테고리
            </td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>
          {/*  꽃배달 카테고리*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">꽃배달 카테고리</td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">분류명 선택</option>
                <option value="category1">카테고리 1</option>
                <option value="category2">카테고리 2</option>
                <option value="category3">카테고리 3</option>
              </select>
            </td>
          </tr>
          {/* 상품코드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">관리코드</td>
            <td className="p-2">
              <input
                type="text"
                name="managerCode"
                placeholder="상품코드를 입력해주세요"
              />
            </td>
          </tr>
          {/* 상품명 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">상품명</td>
            <td className="p-2">
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleInputChange}
              />
              <p className="text-sm text-gray-500 mt-1">
                {byteCount} / {maxBytes} bytes
              </p>
            </td>
          </tr>
          {/* 관리코드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">관리코드</td>
            <td className="p-2">
              <input
                type="text"
                name="managerCode"
                value={formData.managerCode}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* 제조사 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">제조사</td>
            <td className="p-2">
              <input
                type="text"
                name="manufacturer"
                value={formData.manufacturer}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* 브랜드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">브랜드</td>
            <td className="p-2">
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* 과세/면세 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">과세 / 면세</td>
            <td className="p-2">
              <label>
                <input
                  type="radio"
                  name="taxType"
                  value="과세"
                  checked={formData.taxType === "과세"}
                  onChange={handleInputChange}
                />{" "}
                과세
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="taxType"
                  value="면세"
                  checked={formData.taxType === "면세"}
                  onChange={handleInputChange}
                />{" "}
                면세
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="taxType"
                  value="기타"
                  checked={formData.taxType === "기타"}
                  onChange={handleInputChange}
                />{" "}
                기타
              </label>
            </td>
          </tr>

          {/* 상품유형 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">상품유형</td>
            <td className="p-2">
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="NICE ITEM"
                  onChange={handleInputChange}
                />{" "}
                NICE ITEM
              </label>
              <label className="ml-4">
                <input
                  type="checkbox"
                  name="productType"
                  value="FOCUS ITEM"
                  onChange={handleInputChange}
                />{" "}
                FOCUS ITEM
              </label>
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="상설특가관"
                  onChange={handleInputChange}
                />{" "}
                상설특가관
              </label>
              <label className="ml-4">
                <input
                  type="checkbox"
                  name="productType"
                  value="브랜드장보기"
                  onChange={handleInputChange}
                />{" "}
                브랜드장보기
              </label>
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="이달의 신상"
                  onChange={handleInputChange}
                />{" "}
                이달의 신상
              </label>
              <label className="ml-4">
                <input
                  type="checkbox"
                  name="productType"
                  value="기획전"
                  onChange={handleInputChange}
                />{" "}
                기획전
              </label>
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="Biz SHOP"
                  onChange={handleInputChange}
                />{" "}
                Biz SHOP
              </label>
              <label className="ml-4">
                <input
                  type="checkbox"
                  name="productType"
                  value=" Oh!특가"
                  onChange={handleInputChange}
                />{" "}
                Oh!특가
              </label>
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="나이스장터"
                  onChange={handleInputChange}
                />{" "}
                나이스장터
              </label>
              <label className="ml-4">
                <input
                  type="checkbox"
                  name="productType"
                  value=" 꽃배달"
                  onChange={handleInputChange}
                />{" "}
                꽃배달
              </label>
            </td>
          </tr>
          {/* 아이콘유형 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">아이콘박스</td>
            <td className="p-2">
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="BIZ 전용"
                  onChange={handleInputChange}
                />{" "}
                BIZ 전용
              </label>
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="쿠폰"
                  onChange={handleInputChange}
                />{" "}
                쿠폰
              </label>
              <label className="ml-4">
                <input
                  type="checkbox"
                  name="productType"
                  value="브랜드장보기"
                  onChange={handleInputChange}
                />{" "}
                브랜드장보기
              </label>
              <label>
                <input
                  type="checkbox"
                  name="productType"
                  value="무료배송"
                  onChange={handleInputChange}
                />{" "}
                무료배송
              </label>
            </td>
          </tr>
          {/* 원산지 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">원산지</td>
            <td className="p-2">
              <input type="text" name="origin"></input>
            </td>
          </tr>
          {/* 일일 최대 구매 갯수 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              1일 최대 구매 갯수
            </td>
            <td className="p-2">
              <input type="text" name="maxCountByDay"></input>
              <span>개</span>
            </td>
          </tr>
          {/* ID 당 구매 횟수 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">ID 당 구매 횟수</td>
            <td className="p-2">
              <input type="text" name="maxCountByID"></input>
              <span>회</span>
            </td>
          </tr>
          {/* 판매기간사용 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">판매기간 사용</td>
            <td className="p-2">
              <input type="radio" name="used"></input>
              <label className="ml-4" htmlFor="used">
                사용함
              </label>

              <input type="radio" name="notUused"></input>
              <label className="ml-4" htmlFor="notUsed">
                사용안함
              </label>
            </td>
          </tr>
          {/* 판매가 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">판매가</td>
            <td className="p-2">
              <input type="text" name="maxCountByID"></input>
              <span>원</span>
            </td>
          </tr>
          {/* 판매가 대체문구*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">판매가 대체문구</td>
            <td className="p-2">
              <input type="checkbox" name="used"></input>
              <label htmlFor="used">사용</label>
              <input type="text" name="maxCountByID"></input>
              <span>원</span>
            </td>
          </tr>
          {/* 매입가 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">매입가</td>
            <td className="p-2">
              <input type="text" name="purchasePrice"></input>
              <span>원</span>
            </td>
          </tr>
          {/* 소비자가 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">소비자가</td>
            <td className="p-2">
              <input type="text" name="consumerPrice"></input>
              <span>원</span>
            </td>
          </tr>
          {/* 할인율 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">할인율</td>
            <td className="p-2">
              <input type="text" name="discountRate"></input>
              <span>%</span>
            </td>
          </tr>

          {/* 포인트 사용 설정*/}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">할인율</td>
            <td className="p-2 ">
              <label htmlFor="shop">샵</label>
              <input type="text" name="shop"></input>

              <span>P</span>
              <br />
              <label htmlFor="welfare">복지</label>
              <input type="text" name="welfare"></input>

              <span>P</span>
              <br></br>
              <label htmlFor="credit">여신</label>
              <input type="text" name="credit"></input>

              <span>P</span>
            </td>
          </tr>
          <tr className="border">
            {/* 배송비 입력 및 선택 */}
            <td className="p-4 bg-gray-100 text-lg font-bold w-1/6">배송비</td>
            <td className="p-4" colSpan={5}>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  className="border px-2 py-1 w-24"
                  placeholder="원"
                />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="mr-2" /> 무료배송
                </label>
                <label className="text-gray-500 text-sm">
                  ※ 미입력 시 무료배송이 아닌 판매사의 기본 배송비로 노출됩니다.
                </label>
              </div>

              <div className="flex items-center space-x-4 mt-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="mr-2" /> 묶음배송
                </label>
                <span className="text-gray-500 text-sm">
                  ※ 제품 개수에 따라 배송비 차등부과
                </span>
              </div>

              {/* 제품 개수 및 추가 비용 설정 테이블 */}
              <table className="table-auto w-full mt-4 border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">제품 개수</th>
                    <th className="border px-4 py-2 text-left">배송비</th>
                    <th className="border px-4 py-2 text-left">
                      제주 추가비용
                    </th>
                    <th className="border px-4 py-2 text-left">
                      도서산간 추가비용
                    </th>
                    <th className="border px-4 py-2 text-left">추가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        className="border px-2 py-1 w-16"
                        placeholder="개"
                      />
                      <span> ~ </span>
                      <input
                        type="text"
                        className="border px-2 py-1 w-16"
                        placeholder="개"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        className="border px-2 py-1 w-24"
                        placeholder="원"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        className="border px-2 py-1 w-24"
                        placeholder="원"
                      />
                    </td>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        className="border px-2 py-1 w-24"
                        placeholder="원"
                      />
                    </td>
                    <td className="border px-4 py-2 text-blue-500">
                      <button type="button">추가</button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* 제주/도서산간 추가배송비 */}
              <div className="mt-4">
                <span className="font-bold">제주/도서산간 추가배송비: </span>
                <label className="mr-4">
                  <input type="radio" name="island_shipping" className="mr-2" />{" "}
                  설정함
                </label>
                <label className="mr-4">
                  <input type="radio" name="island_shipping" className="mr-2" />{" "}
                  설정 안함
                </label>
                <label>
                  <input type="radio" name="island_shipping" className="mr-2" />{" "}
                  배송불가
                </label>
              </div>
            </td>
          </tr>
          {/* 옵션 입력 및 선택 */}
          <td className="p-4 bg-gray-100 text-l border font-bold w-1/6">옵션입력</td>
          <td className="p-4 border" colSpan={5}>
          

    

            {/* 제품 개수 및 추가 비용 설정 테이블 */}
            <table className="table-auto w-full mt-4 border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">옵션명</th>
                  <th className="border px-4 py-2 text-left">공급가</th>
                  <th className="border px-4 py-2 text-left">금액</th>
                  <th className="border px-4 py-2 text-left">재고</th>
                  <th className="border px-4 py-2 text-left">노출여부</th>
                  <th className="border px-4 py-2 text-left">
                    <button onClick={handleClick} className="text-blue-500">추가</button></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                 
                    <input
                      type="text"
                      className="border px-2 py-1 w-16"
               
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>{" "}
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>
                  <td className="border px-4 py-2 text-red-500">
                    <button type="button">삭제</button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
            
                    <input
                      type="text"
                      className="border px-2 py-1 w-16"
                     
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>{" "}
                  <td className="border px-4 py-2">
                    <input
                      type="text"
                      className="border px-2 py-1 w-24"
                      placeholder="원"
                    />
                  </td>
                  <td className="border px-4 py-2 text-red-500">
                    <button type="button">삭제</button>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* 제주/도서산간 추가배송비 */}
            <div className="mt-4">
              <span className="font-bold">제주/도서산간 추가배송비: </span>
              <label className="mr-4">
                <input type="radio" name="island_shipping" className="mr-2" />{" "}
                설정함
              </label>
              <label className="mr-4">
                <input type="radio" name="island_shipping" className="mr-2" />{" "}
                설정 안함
              </label>
              <label>
                <input type="radio" name="island_shipping" className="mr-2" />{" "}
                배송불가
              </label>
            </div>
          </td>
              {/* 옵션사용 */}
              <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">옵션사용</td>
            <td className="p-2">
           
              <input type="radio" name="used2"/>
              <label id="used2">사용함</label>
              <input type="radio" name="used2"/>
              <label id="notUsed2">사용안함</label>

            </td>
          </tr>

          {/* 상품설명 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">상품설명</td>
            <td className="p-2">
              <Editor />
            </td>
          </tr>

          {/* 이미지 업로드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">List 이미지</td>
            <td className="p-2">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setFormData({ ...formData, imageList: files });
                }}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* view 이미지 업로드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지</td>
            <td className="p-2">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setFormData({ ...formData, imageList: files });
                }}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* view 이미지 업로드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지</td>
            <td className="p-2">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setFormData({ ...formData, imageList: files });
                }}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* view 이미지 업로드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지</td>
            <td className="p-2">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setFormData({ ...formData, imageList: files });
                }}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* view 이미지 업로드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지</td>
            <td className="p-2">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setFormData({ ...formData, imageList: files });
                }}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* view 이미지 업로드 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지</td>
            <td className="p-2">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  const files = e.target.files ? Array.from(e.target.files) : [];
                  setFormData({ ...formData, imageList: files });
                }}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* View 이미지 링크 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">List 이미지(링크)</td>
            <td className="p-2">
              <input
                type="text"
                name="viewImageLink"
                value={formData.viewImageLink}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* View 이미지 링크 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지(링크)</td>
            <td className="p-2">
              <input
                type="text"
                name="viewImageLink"
                value={formData.viewImageLink}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* View 이미지 링크 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지(링크)</td>
            <td className="p-2">
              <input
                type="text"
                name="viewImageLink"
                value={formData.viewImageLink}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* View 이미지 링크 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지(링크)</td>
            <td className="p-2">
              <input
                type="text"
                name="viewImageLink"
                value={formData.viewImageLink}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* View 이미지 링크 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">View 이미지(링크)</td>
            <td className="p-2">
              <input
                type="text"
                name="viewImageLink"
                value={formData.viewImageLink}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>
          {/* 태그 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">검섹</td>
            <td className="p-2">
              <label htmlFor="tags">태그</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* 태그 위에 또 다른 소제목 추가 */}
      <tr>
        <td colSpan={2}>
          <h2 className="text-lg font-bold mt-4 mb-2">상품정보제공고시</h2>
        </td>
      </tr>

      <table className="table-auto w-full border-collapse">
        <tbody>
          {/* 품목 선택 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold w-1/6">품목</td>
            <td className="p-2">
              <select className="border p-2 w-full">
                <option value="">= 품목 선택 =</option>
                <option value="item1">품목 1</option>
                <option value="item2">품목 2</option>
                <option value="item3">품목 3</option>
              </select>
            </td>
          </tr>

          {/* 상세 정보 섹션 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">상세정보</td>
            <td className="p-2" colSpan={2}>
              <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left">항목</th>
                    <th className="border p-2 text-left">정보</th>
                    <th className="border p-2 text-left">상세설명참조 표기</th>
                    <th className="border p-2 text-left">추가</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="border p-2 w-full"
                          value={item.item}
                          onChange={(e) =>
                            handleItemChange(index, "item", e.target.value)
                          }
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="border p-2 w-full"
                          value={item.info}
                          onChange={(e) =>
                            handleItemChange(index, "info", e.target.value)
                          }
                        />
                      </td>
                      <td className="border p-2 text-blue-500">
                        <a href="#" className="text-blue-500 hover:underline">
                          상세설명참조 표기
                        </a>
                      </td>
                      <td className="border p-2 text-blue-500">
                        {index === items.length - 1 && (
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={addItem}
                          >
                            추가
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-xl font-bold mb-4">배송 및 교환/반품 정책</h1>
      <table className="table-auto w-full border-collapse">
        <tbody>
          {/* 배송구분 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold w-1/4">배송구분</td>
            <td className="p-2">
              <input
                type="text"
                name="shippingCategory"
                value={formData.shippingCategory}
                onChange={handleInputChange}
                className="border p-2 w-full"
              />
            </td>
          </tr>

          {/* 포장안내 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">포장안내</td>
            <td className="p-2">
              <textarea
                name="packagingInfo"
                value={formData.packagingInfo}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>

          {/* 반품/교환 방법 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">반품/교환 방법</td>
            <td className="p-2">
              <textarea
                name="returnExchangeMethod"
                value={formData.returnExchangeMethod}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>

          {/* 반품/교환 가능시간 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              반품/교환 가능시간
            </td>
            <td className="p-2">
              <textarea
                name="returnExchangeTime"
                value={formData.returnExchangeTime}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>

          {/* 반품/교환 비용 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">반품/교환 비용</td>
            <td className="p-2">
              <textarea
                name="returnExchangeCost"
                value={formData.returnExchangeCost}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>

          {/* 반품/교환 불가사유 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              반품/교환 불가사유
            </td>
            <td className="p-2">
              <textarea
                name="returnExchangeNotAllowedReason"
                value={formData.returnExchangeNotAllowedReason}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>

          {/* 소비자 피해보상 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">소비자 피해보상</td>
            <td className="p-2">
              <textarea
                name="compensationForDamage"
                value={formData.compensationForDamage}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>

          {/* 환불 지연에 따른 배상 */}
          <tr className="border">
            <td className="bg-gray-100 p-2 font-semibold">
              환불 지연에 따른 배상
            </td>
            <td className="p-2">
              <textarea
                name="compensationForReturnDelay"
                value={formData.compensationForReturnDelay}
                onChange={handleInputChange}
                className="border p-2 w-full h-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">관리자 메모</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr className="border">
              <td className="bg-gray-100 p-4 text-center font-semibold w-1/4">
                관리자 메모
              </td>
              <td className="p-4">
                <textarea
                  name="managerMemo"
                  value={formData.managerMemo}
                  onChange={handleInputChange}
                  className="border p-2 w-full h-20"
                  placeholder="관리자 메모"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 판매사 메모 */}
      <div>
        <h2 className="text-lg font-semibold mb-4">판매사 메모</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr className="border">
              <td className="bg-gray-100 p-4 text-center font-semibold w-1/4">
                판매사 메모
              </td>
              <td className="p-4">
                <textarea
                  name="sellerMemo"
                  value={formData.sellerMemo}
                  onChange={handleInputChange}
                  className="border p-2 w-full h-20"
                  placeholder="판매사 메모"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* 매입 정산 정보*/}
      <div>
        <h2 className="text-lg font-semibold mb-4 mt-4">매입 정산 정보</h2>
        <table className="table-auto w-full border-collapse">
          <tbody>
            <tr className="border">
              <td className="bg-gray-100 p-4 text-center font-semibold w-1/4">
              정산배송료
              </td>
              <td className="p-4">
               <input type="text"  />
               <span>원</span>
              </td>
              
            </tr>
            <tr className="border">
              <td className="bg-gray-100 p-4 text-center font-semibold w-1/4">
              정산상태
              </td>
              <td className="p-4">
               <input type="radio" name="paid"  />
               <label className="mr-4">미정산</label>
               <input type="radio" name="paid"  />
                <label>정산완료</label>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          저장하기
        </button>
      </div>
    </div>
  );
}

export default ModifyProductRegistrationForm;
