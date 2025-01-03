import React from "react";
import CategoryTable from "./CategoryTable";
import SubHeader from "../SubHeader";
function CategoryManagement() {
  return <div className="w-full min-w-[1000px]">
    <SubHeader title="분류 관리"/>
    <CategoryTable  />
  </div>;
}

export default CategoryManagement;

