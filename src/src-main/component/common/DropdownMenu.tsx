import React, { useState } from 'react';

interface DropdownMenuProps {
  title: string;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="w-full px-4 py-2 hover:bg-orange-600 transition-colors duration-300 text-left flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="pl-6 " >
          {children}
        </ul>
      )}
    </>
  );
};

export default DropdownMenu;
