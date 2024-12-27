import React from "react";

const OrderManagement: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Management</h1>
      <p className="text-gray-600">Here you can manage all orders placed by users.</p>
      <ul className="mt-4">
        <li className="mb-2">Order #12345 - Pending</li>
        <li className="mb-2">Order #12346 - Shipped</li>
        <li className="mb-2">Order #12347 - Delivered</li>
      </ul>
    </div>
  );
};

export default OrderManagement;
