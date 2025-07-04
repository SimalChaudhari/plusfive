import { useState, useRef, useEffect } from 'react';
import { 
  FiSearch, 
  FiBell, 
  FiMoon,
  FiSun,
  FiGlobe,
  FiMenu
} from 'react-icons/fi';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useTheme } from '../../../context/ThemeContext';

const AdminHeader = ({ onMobileMenuToggle }) => {
  const [userName] = useState('Noor');
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationRef = useRef();
  const [visibleCount, setVisibleCount] = useState(4);

  const notifications = [
    { id: 1, name: "UI/UX Design", time: "2 min ago", message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Message", time: "1 hour ago", message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Forms", time: "2 hour ago", message: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Challenge invitation", time: "12 hour ago", message: "Jonny aber invites to join the challenge", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Payment", time: "1 day ago", message: "Your payment was successful.", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, name: "Security", time: "2 days ago", message: "Password changed successfully.", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
  ];

  // Toggle notification panel
  const toggleNotifications = () => {
    setShowNotifications(prev => !prev);
  };

  return (
    <header className="bg-white dark:bg-customBlack px-4 lg:px-6 py-4 border-b border-gray-200 dark:border-gray-800 font-ttcommons transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onMobileMenuToggle}
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2C2C2C] rounded-lg lg:hidden transition-colors duration-200 mr-2"
            aria-label="Open sidebar"
          >
            <FiMenu size={24} />
          </button>
          
          <div className="hidden lg:block">
            <p className="text-gray-600 dark:text-white">Hi {userName},</p>
            <h1 className="text-gray-900 dark:text-white text-xl font-semibold flex items-center">
              Welcome back<span className="font-sans">!</span> <span className="ml-2">👋</span>
            </h1>
          </div>
        </div>

        {/* Right side - Search and icons */}
        <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
          {/* Search bar - Hidden on mobile */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 dark:bg-customBlack text-gray-900 dark:text-white rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600 placeholder-gray-500 transition-colors duration-200 border border-gray-200 dark:border-customBorderColor"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-700 dark:text-white  bg-gray-200 dark:bg-customBlack px-1.5 py-0.5 rounded border border-gray-200 dark:border-customBorderColor">
              ⌘K
            </button>
          </div>

          {/* Search icon for mobile */}
          <button className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2C2C2C] rounded-lg lg:hidden transition-colors duration-200">
            <FiSearch size={20} />
          </button>

          {/* Language selector - Hidden on mobile */}
          <div className="hidden lg:flex items-center text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2C2C2C] rounded-full px-3 py-2 cursor-pointer transition-colors duration-200 border border-gray-200 dark:border-customBorderColor bg-gray-100 dark:bg-customBlack">
            <FiGlobe className="text-lg" />
            <span className="mx-2">En</span>
            <IoChevronDownOutline className="text-sm" />
          </div>

          {/* Dark mode toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-full transition-colors duration-200"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? (
              <FiSun className="text-xl text-white" />
            ) : (
              <FiMoon className="text-xl text-gray-700" />
            )}
          </button>

          {/* Notifications */}
          <button
            className="p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-full relative transition-colors duration-200"
            onClick={toggleNotifications}
          >
            <FiBell className="text-xl text-gray-700 dark:text-white" />
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div
              ref={notificationRef}
              className="
                fixed
                top-16
                right-0
                w-[70%]
                sm:top-20
                sm:right-8
                sm:w-[420px]
                sm:left-auto
                sm:mx-0
                left-0
                mx-auto
                sm:max-h-[80vh]
                max-h-[60vh]
                bg-white dark:bg-customBrown
                shadow-2xl rounded-2xl border border-gray-200 dark:border-customBorderColor
                z-[1200]
                overflow-y-auto
                scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
              "
              style={{ minWidth: 0 }}
            >
              <div className="p-4 border-b border-gray-100 dark:border-customBorderColor font-bold text-gray-700 dark:text-white">
                New
              </div>
              <div className="divide-y divide-gray-100 dark:divide-customBorderColor">
                {notifications.slice(0, visibleCount).map(n => (
                  <div key={n.id} className="flex items-center gap-3 px-4 py-3">
                    <img src={n.avatar} className="w-11 h-11 rounded-full object-cover" alt="" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900 dark:text-white">{n.name}</span>
                        <span className="text-xs text-gray-400">{n.time}</span>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-300">{n.message}</div>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < notifications.length && (
                <button
                  className="w-full py-2 text-blue-600 font-semibold hover:underline"
                  onClick={() => setVisibleCount(c => c + 4)}
                >
                  Load More
                </button>
              )}
              {visibleCount > 4 && (
                <button
                  className="w-full py-2 text-blue-600 font-semibold hover:underline"
                  onClick={() => setVisibleCount(4)}
                >
                  Show Less
                </button>
              )}
            </div>
          )}

          {/* Profile */}
          <button className="flex items-center space-x-2">
            <img
              src="https://ui-avatars.com/api/?name=Noor&background=random"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader; 