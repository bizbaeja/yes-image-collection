import React from "react";

interface JoinDateProps {
  date: string; // 가입일을 문자열 형식으로 전달
}

const JoinDate: React.FC<JoinDateProps> = ({ date }) => {
  return (
    <div className="p-4 bg-gray-100 border border-gray-300 rounded shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700">가입일</h2>
      <p className="text-gray-600">{date}</p>
    </div>
  );
};

export default JoinDate;
