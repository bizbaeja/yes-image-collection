import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxPageButtons?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  setCurrentPage,
  showFirstLast = false, // 처음/끝 버튼 표시 여부
  showPrevNext = true, // 이전/다음 버튼 표시 여부
  maxPageButtons = 5, // 한 번에 표시할 최대 페이지 버튼 수
}) => {
  const handleFirst = () => setCurrentPage(1);
  const handleLast = () => setCurrentPage(totalPages);
  const handlePrev = () => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  const handleNext = () =>
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);

  const generatePageButtons = () => {
    const pageButtons: JSX.Element[] = [];
    const halfRange = Math.floor(maxPageButtons / 2);
    let startPage = Math.max(1, currentPage - halfRange);
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // Adjust start page if the total number of pages is less than maxPageButtons
    if (
      endPage - startPage + 1 < maxPageButtons &&
      totalPages >= maxPageButtons
    ) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`border px-2 py-1 sm:px-4 sm:py-2 mx-1 text-sm sm:text-base ${
            currentPage === i ? "bg-gray-300 font-bold" : "hover:bg-gray-100"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="flex justify-center mt-8 items-center space-x-1 sm:space-x-2">
      {showFirstLast && (
        <button
          onClick={handleFirst}
          disabled={currentPage === 1}
          className={`border px-2 py-1 sm:px-4 sm:py-2 mx-1 text-sm sm:text-base ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          처음
        </button>
      )}

      {showPrevNext && (
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`border px-2 py-1 sm:px-4 sm:py-2 mx-1 text-sm sm:text-base ${
            currentPage === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          이전
        </button>
      )}

      {generatePageButtons()}

      {showPrevNext && (
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`border px-2 py-1 sm:px-4 sm:py-2 mx-1 text-sm sm:text-base ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          다음
        </button>
      )}

      {showFirstLast && (
        <button
          onClick={handleLast}
          disabled={currentPage === totalPages}
          className={`border px-2 py-1 sm:px-4 sm:py-2 mx-1 text-sm sm:text-base ${
            currentPage === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          끝
        </button>
      )}
    </div>
  );
};

export default Pagination;
