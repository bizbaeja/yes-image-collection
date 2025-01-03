import React from "react";
import Breadcrumb from "../../common/BreadCrumb";

interface SubHeaderProps {
  title: string;
}

function SubHeader({ title }: SubHeaderProps) {
  return <div className="container mx-auto p-2 bg-white">
    <Breadcrumb />
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
  </div>;
}

export default SubHeader;
