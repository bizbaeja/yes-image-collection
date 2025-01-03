import React from "react";
import ProductSearchForm from "../ProductSearchForm";
import ProductTable from "../ProductTable";
import SubHeader from "../SubHeader";
function AdminProduct() {
  return <div>  <SubHeader  title="관리자 상품목록"/>
  <ProductSearchForm />
  <ProductTable /></div>;
}

export default AdminProduct;
