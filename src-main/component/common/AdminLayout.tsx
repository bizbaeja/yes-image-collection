import React, { useState } from "react";
import Sidebar from "./sidebar/SideBar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Header */}
      <Header />

      {/* 햄버거 메뉴 버튼 (모바일 전용) */}
      <div className="md:hidden bg-white shadow-sm p-2 flex justify-end">
        <button
          onClick={toggleSidebar}
          className="text-black text-3xl focus:outline-none"
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full bg-blue-900 text-white shadow-md z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className={`flex flex-1 flex-col ${isSidebarOpen ? "md:pl-64" : ""}`}>
        <main className="flex-grow p-6 bg-gray-100">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
