import React from "react";
import SubHeader from "../SubHeader";
import CategoryTable from "./CategoryTable";
function SpecialCategory() {
  return <div className="w-full min-w-[1000px]">
    <SubHeader  title="상설특가관 분류관리"/>
    <CategoryTable  />
  </div>;
}

export default SpecialCategory;
