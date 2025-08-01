import { useState, useRef, useEffect } from 'react';
import { 
  FiSearch, 
  FiBell, 
  FiMoon,
  FiSun,
  FiMenu,
  FiEdit2,
  FiSettings,
  FiHelpCircle,
  FiLogOut
} from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { CommonNormalDropDown } from '../index';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import userNavLinks, { specialPageTitles as userSpecialTitles } from './UserNavLinks';
import adminNavLinks, { specialPageTitles as adminSpecialTitles } from './AdminNavLinks';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import CommonConfirmModel from '../commonComponent/CommonConfirmModel';

const Header = ({ onMobileMenuToggle }) => {
  const [userName] = useState('Noor');
  const { isDarkMode, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const profileMenuRef = useRef(null);
  const notificationRef = useRef();
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
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
  // Logout handler
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login', { replace: true });
  };
  // Close profile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  const userRole = useSelector(state => state.auth?.user?.role);
  const navLinks = userRole === 'admin' ? adminNavLinks : userNavLinks;
  const specialTitles = userRole === 'admin' ? adminSpecialTitles : userSpecialTitles;
  
  const currentNav = navLinks.find(link =>
    link.to === location.pathname ||
    (link.specialPaths && link.specialPaths.includes(location.pathname))
  );

  let pageTitle = '';
  if (specialTitles && specialTitles[location.pathname]) {
    pageTitle = specialTitles[location.pathname];
  } else if (currentNav) {
    pageTitle = currentNav.label;
  } else {
    pageTitle = 'Page';
  }

  const isDashboard = location.pathname === '/app/dashboard' || location.pathname === '/app' || location.pathname === '/admin/dashboard' || location.pathname === '/admin';

  const isAdmin = userRole === 'admin';
  const accountSettingsLink = isAdmin ? '/admin/account-settings' : '/app/account-settings';
  const supportLink = isAdmin ? '/admin/support-and-help' : '/app/support-and-help';

  return (
    <header className="bg-white dark:bg-customBlack px-4 lg:px-6 py-4 border-b border-gray-200 dark:border-gray-800 font-ttcommons transition-colors duration-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button 
            onClick={onMobileMenuToggle}
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-customIconBgColor rounded-lg lg:hidden transition-colors duration-200 mr-2"
            aria-label="Open sidebar"
          >
            <FiMenu size={24} />
          </button>
          <div className="hidden lg:block">
            {isDashboard ? (
              <span>
                <p className="text-gray-600 dark:text-white text-16">Hi {userName},</p>
                <h1 className="text-gray-900 dark:text-white font-semibold flex items-center md:text-24">
                  Welcome back<span className="font-sans">!</span> <span className="ml-2">👋</span>
                </h1>
              </span>
            ) : (
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1 md:text-24">{pageTitle}</div>
            )}
          </div>
        </div>
        {/* Right side - Search and icons */}
        <div className="flex items-center space-x-2 lg:space-x-4 ml-auto">
          {/* Search bar - Hidden on mobile */}
          <div className="hidden lg:block relative">
            <div className="flex items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg bg-transparent px-3 py-1.5 w-full">
              <FiSearch className="text-20px text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none border-none text-gray-300 placeholder-gray-400 text-16"
              />
              <span className="flex items-center gap-1 px-[5px] pt-[5px] pb-[1px] ml-2 rounded border border-gray-200 dark:border-gray-600 dark:text-white bg-transparent font-mono text-12">
                <span className="text-10">⌘</span>
                <span className="text-12">K</span>
              </span>
            </div>
          </div>
          {/* Search icon for mobile */}
          <button
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-customIconBgColor rounded-lg lg:hidden transition-colors duration-200"
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
            className="p-2 bg-gray-100 dark:bg-customIconBgColor rounded-full transition-colors duration-200"
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
            className="p-2 bg-gray-100 dark:bg-customIconBgColor rounded-full relative transition-colors duration-200"
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
      {/* Mobile Search Modal */}
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
      {/* Profile Dropdown */}
      {showProfileMenu && (
        <div
          ref={profileMenuRef}
          className="absolute md:right-10 right-2 mt-2 w-auto sm:w-72 bg-white dark:bg-customBlack rounded-2xl shadow-2xl border border-gray-200 dark:border-customBorderColor z-[1200] p-0 overflow-hidden"
        >
          <div className="flex flex-col items-center py-5 px-6 bg-white dark:bg-customBlack">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold bg-orange-500 text-white mb-2 shadow">
              NO
            </div>
            <div className="font-semibold text-gray-900 dark:text-white text-lg">Noor</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">noor@email.com</div>
          </div>
          <div className="py-2 bg-white dark:bg-customBlack">
            <Link
              to={accountSettingsLink}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 dark:hover:bg-[#232323] transition-colors text-gray-700 dark:text-white text-base"
              onClick={() => setShowProfileMenu(false)}
            >
              <FiEdit2 className="text-lg text-gray-500 dark:text-gray-300" />
              Edit profile
            </Link>
            <Link
              to={accountSettingsLink}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 dark:hover:bg-[#232323] transition-colors text-gray-700 dark:text-white text-base"
              onClick={() => setShowProfileMenu(false)}
            >
              <FiSettings className="text-lg text-gray-500 dark:text-gray-300" />
              Account settings
            </Link>
            <Link
              to={supportLink}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 dark:hover:bg-[#232323] transition-colors text-red-500 dark:text-red-400 text-base"
              onClick={() => setShowProfileMenu(false)}
            >
              <FiHelpCircle className="text-lg text-red-500 dark:text-red-400" />
              Support
            </Link>
          </div>
          <hr className="border-gray-200 dark:border-customBorderColor my-0" />
          <button
            className="flex items-center gap-3 px-6 py-3 w-full hover:bg-red-50 dark:hover:bg-[#3a2323] transition-colors text-red-600 dark:text-red-400 font-semibold text-base"
            onClick={() => setShowLogoutModal(true)}
          >
            <FiLogOut className="text-lg" />
            Log out
          </button>
        </div>
      )}
      <CommonConfirmModel
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </header>
  );
};

export default Header; 