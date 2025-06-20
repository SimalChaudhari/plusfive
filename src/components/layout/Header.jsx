import { useState } from 'react';
import { 
  FiSearch, 
  FiBell, 
  FiMoon,
  FiSun,
  FiGlobe
} from 'react-icons/fi';
import { IoChevronDownOutline } from 'react-icons/io5';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const [userName] = useState('Noor');
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-customBlack px-4 lg:px-6 py-4 border-b border-gray-200 dark:border-gray-800 font-ttcommons transition-colors duration-200">
      <div className="flex items-center justify-between">
        {/* Left side - Welcome message */}
        <div className="hidden lg:block">
          <p className="text-gray-600 dark:text-white">Hi {userName},</p>
          <h1 className="text-gray-900 dark:text-white text-xl font-semibold flex items-center">
            Welcome back<span className="font-sans">!</span> <span className="ml-2">👋</span>
          </h1>
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
          <button className="p-2 bg-gray-100 dark:bg-[#2C2C2C] rounded-full relative transition-colors duration-200">
            <FiBell className="text-xl text-gray-700 dark:text-white" />
            {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
          </button>

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

export default Header; 