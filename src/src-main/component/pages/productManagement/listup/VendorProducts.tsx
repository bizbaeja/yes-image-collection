import React from "react";
import ProductSearchForm from "../ProductSearchForm";
import ProductTable from "../ProductTable";
import SubHeader from "../SubHeader";
function VendorProducts() {
  return <div>
  <SubHeader  title="판매자 상품목록"/>
  <ProductSearchForm />
  <ProductTable />
</div>;
}

export default VendorProducts;
