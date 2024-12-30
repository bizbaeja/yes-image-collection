import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-6 bg-gray-100">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
