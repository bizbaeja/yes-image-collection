import React from "react";
// AdminLayout 임포트 제거
import UserInfoTable from "./component/pages/memberManagement/UserInfoTable";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">가입일</h1>
      <UserInfoTable />
    </div>
  );
};

export default DashboardPage;