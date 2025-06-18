import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarCollapse = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-customBlack transition-colors duration-200">
      <Sidebar onCollapse={handleSidebarCollapse} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'ml-16' : 'ml-16 lg:ml-64'}`}>
        <Header />
        <main className="flex-1 p-4 lg:p-6 bg-gray-50 dark:bg-customBlack transition-colors duration-200">
          {children}
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Layout; 