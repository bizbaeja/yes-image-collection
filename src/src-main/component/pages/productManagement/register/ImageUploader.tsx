import React, { useState } from 'react';

interface ImageUploaderProps {
  onImagesChange: (images: { file: File; preview: string; name: string; size: number; type: string }[]) => void;
}

function ImageUploader({ onImagesChange }: ImageUploaderProps) {
  const [images, setImages] = useState<{ file: File; preview: string; name: string; size: number; type: string }[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file as Blob),
      name: file.name,
      size: file.size,
      type: file.type
    }));
    setImages([...images, ...newImages]);
    onImagesChange([...images, ...newImages]);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImagesChange(newImages);
  };

  const moveImage = (index: number, direction: number) => {
    const newImages = [...images];
    const temp = newImages[index];
    newImages[index] = newImages[index + direction];
    newImages[index + direction] = temp;
    setImages(newImages);
    onImagesChange(newImages);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">상품 이미지</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image.preview} alt={`상품 이미지 ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
            <div className="absolute top-0 right-0 flex">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => moveImage(index, -1)}
                  className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-1"
                >
                  ↑
                </button>
              )}
              {index < images.length - 1 && (
                <button
                  type="button"
                  onClick={() => moveImage(index, 1)}
                  className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-1"
                >
                  ↓
                </button>
              )}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              >
                X
              </button>
            </div>
            <p className="text-xs mt-1">{image.name}</p>
            <p className="text-xs">{(image.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
      />
    </div>
  );
}

export default ImageUploader;