import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import OptionManager from './OptionManager';
import ImageUploader from './ImageUploader';
import Editor from './Editor';

// Ensure the Editor component accepts initialContent prop
interface EditorProps {
  initialContent: string;
  onEditorChange: (content: any) => void;
}

const LocalEditor: React.FC<EditorProps> = ({  }) => {
  // Editor component implementation
  return (
    <div>
      {/* Editor logic here */}
    </div>
  );
};

function ItemForm() {
  const [formData, setFormData] = useState({
    itemName: '',
    itemCode: '',
    modelName: '',
    brandName: '',
    makerName: '',
    originCountry: '',
    salePrice: '',
    costPrice: '',
    stockQuantity: '',
    category: [],
    options: [],
    images: [],
    description: '',
    isRecommended: false,
    isBestSeller: false,
    isNewArrival: false,
    isSale: false,
    isGift: false,
    isSet: false,
    taxType: '과세',
    deliveryType: '무료배송',
    deliveryMethod: '택배',
    deliveryFee: '',
    additionalDeliveryFee: '',
    returnExchangeFlag: '가능',
    returnExchangeAddress: '',
    detailedDescription: '',
    purchaseNotes: '',
    productLabels: [],
    sizeInfo: '',
    washingInfo: '',
    qualityAssuranceStandards: '',
    asInfo: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCategoryChange = (categories: any) => {
    setFormData(prevState => ({ ...prevState, category: categories }));
  };

  const handleOptionsChange = (options: any) => {
    setFormData(prevState => ({ ...prevState, options }));
  };

  const handleImagesChange = (images: any) => {
    setFormData(prevState => ({ ...prevState, images }));
  };

  const handleEditorChange = (content: any, editorName: string) => {
    setFormData(prevState => ({ ...prevState, [editorName]: content }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('제출된 데이터:', formData);
    // API 호출 로직
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">상품 등록/수정</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 기본 정보 섹션 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">기본 정보</h2>
          <table className="table-auto w-full mb-6 border-collapse border border-gray-200">
            <tbody>
              <tr>
                <td className="border p-2 font-semibold bg-gray-100">상품명</td>
                <td className="border p-2">
                  <input
                    type="text"
                    name="itemName"
                    value={formData.itemName}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </td>
                <td className="border p-2 font-semibold bg-gray-100">모델명</td>
                <td className="border p-2">
                  <input
                    type="text"
                    name="modelName"
                    value={formData.modelName}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </td>
              </tr>
              {/* 추가 기본 정보 입력란들 */}
              <tr>
                <td className="border p-2 font-semibold bg-gray-100">상품코드</td>
                <td className="border p-2">
                  <input
                    type="text"
                    name="itemCode"
                    value={formData.itemCode}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </td>
                <td className="border p-2 font-semibold bg-gray-100">브랜드명</td>
                <td className="border p-2">
                  <input
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    className="w-full border p-2"
                  />
                </td>
              </tr>
              {/* 여기서 계속해서 사진의 필드를 추가로 작성할 수 있습니다 */}
            </tbody>
          </table>
        </section>

        {/* 카테고리 선택 */}
        <CategorySelector onCategoryChange={handleCategoryChange} />

        {/* 상품 옵션 */}
        <OptionManager onOptionsChange={handleOptionsChange} />

        {/* 상품 이미지 */}
        <ImageUploader onImagesChange={handleImagesChange} />

        {/* 상세 설명 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">상세 설명</h2>
          <LocalEditor
            initialContent={formData.detailedDescription}
            onEditorChange={(content: any) => handleEditorChange(content, 'detailedDescription')}
          />
        </section>

        {/* 배송 정보 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">배송 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">배송 방법</label>
              <select
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="택배">택배</option>
                <option value="화물">화물</option>
                <option value="직접배송">직접배송</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">배송비</label>
              <input
                type="number"
                name="deliveryFee"
                value={formData.deliveryFee}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            저장하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default ItemForm;
