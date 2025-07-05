import { useState, useRef, useEffect } from 'react';
import { 
  FiSearch, 
  FiBell, 
  FiMoon,
  FiSun,
  FiMenu
} from 'react-icons/fi';
import { useTheme } from '../../../context/ThemeContext';
import { CommonNormalDropDown } from '../../index';

const AdminHeader = ({ onMobileMenuToggle }) => {
  const [userName] = useState('Noor');
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);

  const notificationRef = useRef();
  const [visibleCount, setVisibleCount] = useState(4);

  const languageOptions = [
    { value: "en", label: "English", code: "en" },
    { value: "hi", label: "Hindi", code: "hi" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("en");

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
  
  // Toggle profile menu panel
  const toggleProfileMenu = () => {
    setShowProfileMenu(prev => !prev);
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
          <div className="hidden lg:block relative w-72">
            <div className="flex items-center border border-gray-600 dark:border-gray-500 rounded-lg bg-transparent px-3 py-1.5 w-full">
              <FiSearch className="text-xl text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none border-none text-gray-300 placeholder-gray-400 text-base"
              />
              <span className="flex items-center px-2 py-0.5 ml-2 rounded border border-gray-500 dark:text-white bg-transparent font-mono text-sm">
                ⌘K
              </span>
            </div>
          </div>

          {/* Search icon for mobile */}
          <button
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2C2C2C] rounded-lg lg:hidden transition-colors duration-200"
            onClick={() => setShowSearchModal(true)}
          >
            <FiSearch size={20} />
          </button>

          {/* Language selector - Hidden on mobile */}
          <CommonNormalDropDown
            options={languageOptions}
            value={selectedLanguage}
            onChange={setSelectedLanguage}
            className="hidden lg:flex"
          />

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
                top-20
                right-2
                w-[70%]
                sm:top-20
                sm:right-8
                sm:w-[420px]
                sm:left-auto
                sm:mx-0
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
          <button
            className="flex items-center space-x-2"
            onClick={toggleProfileMenu}
          >
            <img
              src="https://ui-avatars.com/api/?name=Noor&background=random"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </button>
        </div>
      </div>

      {showSearchModal && (
        <div className="fixed inset-0 z-[2000] dark:bg-white dark:bg-opacity-20 bg-black bg-opacity-60 flex items-start justify-center pt-24">
          <div className="bg-white dark:bg-customBlack rounded-xl p-4 w-[90vw] max-w-xs shadow-xl flex flex-col">
            <div className="flex items-center">
              <FiSearch className="text-xl text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none border-none text-gray-800 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 text-base"
                autoFocus
              />
              <button
                className="ml-2 text-gray-500 dark:text-gray-400 hover:text-pink-500 text-2xl"
                onClick={() => setShowSearchModal(false)}
                aria-label="Close search"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {showProfileMenu && (
        <div
          ref={profileMenuRef}
          className="absolute md:right-10 right-2 mt-2 w-64 bg-white dark:bg-customBlack rounded-xl shadow-2xl border border-gray-200 dark:border-customBorderColor z-[1200] p-4"
        >
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://ui-avatars.com/api/?name=Noor&background=random"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">Noor</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">noor@email.com</div>
            </div>
          </div>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232323] text-gray-700 dark:text-white text-left">
            <span>📝</span> Edit profile
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232323] text-gray-700 dark:text-white text-left">
            <span>⚙️</span> Account settings
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232323] text-gray-700 dark:text-white text-left">
            <span>❓</span> Support
          </button>
          <hr className="my-2 border-gray-200 dark:border-customBorderColor" />
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#232323] text-red-500 text-left">
            <span>🚪</span> Sign out
          </button>
        </div>
      )}
    </header>
  );
};

export default AdminHeader; 