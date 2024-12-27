import React from "react";

const ProductManagement: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Management</h1>
      <p className="text-gray-600">Manage your product catalog, inventory, and prices.</p>
      <table className="table-auto w-full mt-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Product A</td>
            <td className="border px-4 py-2">$100</td>
            <td className="border px-4 py-2">50</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Product B</td>
            <td className="border px-4 py-2">$200</td>
            <td className="border px-4 py-2">30</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Product C</td>
            <td className="border px-4 py-2">$150</td>
            <td className="border px-4 py-2">20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagement;
