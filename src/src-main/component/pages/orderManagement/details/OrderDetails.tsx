import React from "react";
import OrderTable from "./OrderTable";
// import Breadcrumb from "../../../common/BreadCrumb";
import PaymentDetails from "./PaymentDetails";
import PaymentDetailInfo from "./PaymentDetailInfo";
import ShopMemo from "./ShopMemo";
import ShippingInfo from "./ShippingInfo";
function OrderDetails() {
  return <div>
    {/* <Breadcrumb /> */}
    <OrderTable />
    <PaymentDetails />
    <PaymentDetailInfo />
    <ShopMemo />
    <ShippingInfo />
  </div>;
}

export default OrderDetails;
