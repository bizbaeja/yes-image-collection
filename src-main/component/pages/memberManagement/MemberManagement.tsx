import React from "react";

const MemberManagement: React.FC = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Member Management</h1>
      <p className="text-gray-600">View and manage registered members.</p>
      <table className="table-auto w-full mt-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Member Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">john@example.com</td>
            <td className="border px-4 py-2">Active</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">jane@example.com</td>
            <td className="border px-4 py-2">Inactive</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Michael Johnson</td>
            <td className="border px-4 py-2">michael@example.com</td>
            <td className="border px-4 py-2">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MemberManagement;
