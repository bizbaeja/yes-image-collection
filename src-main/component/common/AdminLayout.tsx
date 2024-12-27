import React from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Footer from './Footer';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
    <Footer />
  </div>
);

export default Layout;
