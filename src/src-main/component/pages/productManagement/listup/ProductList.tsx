import React from "react";
import ProductSearchForm from "../ProductSearchForm";
import ProductTable from "../ProductTable";
import SubHeader from "../SubHeader";
function ProductList() {
  return <div>
    <SubHeader  title="전체 상품목록"/>
    <ProductSearchForm />
    <ProductTable />
  </div>;
}

export default ProductList;
