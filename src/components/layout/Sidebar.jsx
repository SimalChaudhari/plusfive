import { Link, useLocation } from 'react-router-dom';
import { MdDashboard, MdQrCode2, MdShare, MdPeople, MdAnalytics, 
         MdCreditCard, MdSettings, MdHelp, MdLogout, MdClose, MdStars,
         MdChevronLeft, MdChevronRight, 
         MdOutlineAdd} from 'react-icons/md';
import { useEffect, useState } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { useTheme } from '../../context/ThemeContext';
import { CommonButton } from '../index';

const Sidebar = ({ onCollapse }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
        onCollapse?.(true);
      } else {
        setIsCollapsed(false);
        onCollapse?.(false);
      }
    };
  
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  

  const toggleSidebar = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapse?.(newCollapsed);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path) => {
    return `flex items-center w-full px-3 py-2 rounded-lg relative group transition-colors duration-200
    ${isActive(path) 
      ? 'bg-gray-200 dark:bg-[#2C2C2C] border-l-4 border-l-pink-500 text-gray-900 dark:text-white' 
      : 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2C2C2C] hover:text-gray-900 dark:hover:text-white'
    }`;
  };

  const getTooltipClasses = () => {
    return `fixed left-[4.5rem] px-3 py-2 bg-gray-800 dark:bg-[#2C2C2C] text-white text-sm rounded-md
    transition-all duration-300 ease-in-out
    ${isCollapsed ? 'lg:block' : 'lg:hidden'} 
    opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap translate-x-[-20px] 
    group-hover:translate-x-0 z-[9999] shadow-lg`;
  };

  return (
    <aside className={`font-ttcommons fixed left-0 top-0 h-screen bg-white dark:bg-customBlack border-r border-gray-200 dark:border-gray-800 flex flex-col z-[100] transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="flex items-center h-[69px] md:h-[85px] px-4 relative">
        <span className="text-gray-900 dark:text-white text-2xl font-bold icon-button relative group">
          <MdOutlineAdd className="text-white text-2xl" />
          {isCollapsed && (
            <span className={getTooltipClasses()}>
              Create New
            </span>
          )}
        </span>
        <span className={`ml-2 text-xl font-semibold text-gray-900 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
          PlusFive
        </span>
        
        {/* Toggle Button - Only visible on large screens */}
        <button 
          onClick={toggleSidebar}
          className="flex absolute -right-3 top-7 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-1 shadow-lg z-[101]"
        >
          {isCollapsed ? <MdChevronRight size={16} /> : <MdChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-3 px-2">
          <li className="relative">
            <Link to="/dashboard" className={getLinkClasses('/dashboard')}>
              <IoHomeOutline className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/') || isActive('/dashboard') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Dashboard
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Dashboard
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/qr-management" className={getLinkClasses('/qr-management')}>
              <MdQrCode2 className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/qr-management') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                QR Management
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  QR Management
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/referral" className={getLinkClasses('/referral')}>
              <MdShare className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/referral') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Referral Program
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Referral Program
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/customers" className={getLinkClasses('/customers')}>
              <MdPeople className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/customers') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Customer Management
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Customer Management
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/analytics" className={getLinkClasses('/analytics')}>
              <MdAnalytics className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/analytics') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Analytics
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Analytics
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/billing" className={getLinkClasses('/billing')}>
              <MdCreditCard className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/billing') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Subscription <span className="font-sans">&</span> Billing
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Subscription <span className="font-sans">&</span> Billing
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/settings" className={getLinkClasses('/settings')}>
              <MdSettings className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/settings') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Account Settings
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Account Settings
                </span>
              )}
            </Link>
          </li>
          <li className="relative">
            <Link to="/support" className={getLinkClasses('/support')}>
              <MdHelp className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive('/support') ? 'text-gray-900 dark:text-white' : ''}`} />
              <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                Support <span className="font-sans">&</span> Help
              </span>
              {isCollapsed && (
                <span className={getTooltipClasses()}>
                  Support <span className="font-sans">&</span> Help
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Upgrade Plan Card - Only visible on large screens and when not collapsed */}
      <div className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'} p-4`}>
        <div className="bg-gray-100 dark:bg-customBrown border border-gray-200 dark:border-gray-800 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <MdStars className="text-blue-500 text-[22px]" />
            <button className="ml-auto text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-white">
              <MdClose className="text-[20px]" />
            </button>
          </div>
          <div className="mb-2">
            <div className="flex items-center">
              <span className="font-medium text-gray-900 dark:text-white">Upgrade Plan</span>
              <span className="ml-2 text-xs bg-gray-200 dark:bg-[#3C3C3C] text-gray-700 dark:text-white px-2 py-1 rounded">20% OFF</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-white mt-1">Unlock Full access of data, and advanced reporting</p>
          </div>
          <CommonButton 
            text="Upgrade now"
            className="w-full"
          />
        </div>
      </div>

      {/* Logout */}
      <div className="relative m-3">
        <button className={getLinkClasses('')}>
          <MdLogout className={`text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'}`} />
          <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
            Logout
          </span>
          {isCollapsed && (
            <span className={getTooltipClasses()}>
              Logout
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar; 