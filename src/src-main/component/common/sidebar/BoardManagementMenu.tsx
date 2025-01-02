import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";
 
function BoardManagementMenu() {
  return (
    <>
        <li>
          <Link to="/admin/board-management" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
            게시판 관리
          </Link>
        </li>
     
      <DropdownMenu title="게시물 관리">
        <li>
          <Link to="/admin/board-management/notice" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
            공지사항 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/board-management/faq" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
            자주 묻는 질문 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/board-management/product-qna" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
            상품 Q&A 관리
          </Link>
        </li>
        <li>
          <Link to="/admin/board-management/product-review" className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
            상품 리뷰 관리
          </Link>
        </li>
      </DropdownMenu>
    </>
  )
}

export default BoardManagementMenu;
