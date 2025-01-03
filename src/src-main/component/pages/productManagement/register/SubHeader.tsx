import React from "react";

interface SubHeaderProps {
  title: string;
}

function SubHeader({ title }: SubHeaderProps) {
  return <div>
            <h1 className="text-3xl font-bold mb-6">{title}</h1>
  </div>;
}

export default SubHeader;
