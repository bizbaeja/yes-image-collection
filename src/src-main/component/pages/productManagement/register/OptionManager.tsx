import React, { useState } from 'react';

interface Option {
  name: string;
  values: string;
  price: string;
  stock: string;
}

interface OptionManagerProps {
  onOptionsChange: (options: Option[]) => void;
}

function OptionManager({ onOptionsChange }: OptionManagerProps) {
  const [options, setOptions] = useState<Option[]>([]);

  const addOption = () => {
    setOptions([...options, { name: '', values: '', price: '', stock: '' }]);
    onOptionsChange([...options, { name: '', values: '', price: '', stock: '' }]);
  };

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    onOptionsChange(newOptions);
  };

  const handleOptionChange = (index: number, field: string, value: string) => {
    const newOptions = options.map((option, i) => {
      if (i === index) {
        return { ...option, [field]: value };
      }
      return option;
    });
    setOptions(newOptions);
    onOptionsChange(newOptions);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">상품 옵션</h2>
      {options.map((option, index) => (
        <div key={index} className="flex space-x-2 mb-2">
          <input
            type="text"
            placeholder="옵션명"
            value={option.name}
            onChange={(e) => handleOptionChange(index, 'name', e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <input
            type="text"
            placeholder="옵션값 (쉼표로 구분)"
            value={option.values}
            onChange={(e) => handleOptionChange(index, 'values', e.target.value)}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <input
            type="number"
            placeholder="추가 가격"
            value={option.price}
            onChange={(e) => handleOptionChange(index, 'price', e.target.value)}
            className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <input
            type="number"
            placeholder="재고"
            value={option.stock}
            onChange={(e) => handleOptionChange(index, 'stock', e.target.value)}
            className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          <button
            type="button"
            onClick={() => removeOption(index)}
            className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            삭제
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addOption}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        옵션 추가
      </button>
    </div>
  );
}

export default OptionManager;