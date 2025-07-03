import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
// import AdminFooter from './AdminFooter';

const AdminLayout = ({ children }) => {
  const [isDesktopSidebarCollapsed, setIsDesktopSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false); // Close mobile menu on resize to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-customBlack overflow-x-hidden">
      <AdminSidebar 
        isCollapsed={isDesktopSidebarCollapsed} 
        onCollapse={setIsDesktopSidebarCollapsed}
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className={`flex flex-col flex-1 transition-all duration-300 min-w-0 ${isMobile ? 'ml-0' : (isDesktopSidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64')}`}>
        <AdminHeader onMobileMenuToggle={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
        {/* <AdminFooter /> */}
      </div>
    </div>
  );
};

export default AdminLayout; 