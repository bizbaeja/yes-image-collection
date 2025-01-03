import React, { useState } from 'react';

interface CategorySelectorProps {
  onCategoryChange: (categories: string[]) => void;
}

function CategorySelector({ onCategoryChange }: CategorySelectorProps) {
  const [categories, setCategories] = useState(['', '', '']);

  const handleCategoryChange = (index: number, value: string) => {
    const newCategories = [...categories];
    newCategories[index] = value;
    setCategories(newCategories);
    onCategoryChange(newCategories);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">카테고리</label>
      <div className="mt-1 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <select
            key={index}
            value={categories[index]}
            onChange={(e) => handleCategoryChange(index, e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">선택</option>
            {/* 여기에 실제 카테고리 옵션을 추가하세요 */}
            <option value="category1">카테고리 1</option>
            <option value="category2">카테고리 2</option>
            <option value="category3">카테고리 3</option>
          </select>
        ))}
      </div>
    </div>
  );
}

export default CategorySelector;