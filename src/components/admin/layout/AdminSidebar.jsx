import {
  MdQrCode2, MdShare, MdPeople, MdAnalytics,
  MdCreditCard, MdSettings, MdHelp, MdLogout,
  MdChevronLeft, MdChevronRight,
  MdOutlineAdd
} from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import UpgradeCard from '../../layout/UpgradeCard';
import SidebarNavItem from '../../layout/SidebarNavItem';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { to: '/admin/dashboard', icon: IoHomeOutline, label: 'Dashboard', specialPaths: ['/','/admin'] },
  { to: '/admin/qr-management', icon: MdQrCode2, label: 'QR Management' },
  { to: '/admin/referral-management', icon: MdShare, label: 'Referral Program' },
  { to: '/admin/user-management', icon: MdPeople, label: 'User Management' },
  { to: '/admin/analytics', icon: MdAnalytics, label: 'Analytics' },
  { to: '/admin/subscription-and-billing', icon: MdCreditCard, label: <>Subscription <span className="font-sans">&</span> Billing</>, specialPaths: ['/admin/update-payment', '/admin/add-card'] },
  { to: '/admin/account-settings', icon: MdSettings, label: 'Account Settings' },
  { to: '/admin/support-and-help', icon: MdHelp, label: <>Support <span className="font-sans">&</span> Help</> },
];

const AdminSidebar = ({ isCollapsed, onCollapse, isMobile, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const toggleDesktopSidebar = () => {
    onCollapse(!isCollapsed);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login', { replace: true });
  };

  const effectiveCollapsed = isMobile ? false : isCollapsed;

  const sidebarClasses = `
    font-ttcommons
    fixed left-0 top-0 h-screen 
    bg-white dark:bg-customBlack 
    border-r border-gray-200 dark:border-gray-800 
    flex flex-col z-[100] 
    transition-all duration-300 ease-in-out
    ${isMobile ?
      `w-64 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}` :
      `${isCollapsed ? 'w-16' : 'w-64'}`
    }
  `;

  return (
    <>
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[99]"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
      <aside className={sidebarClasses}>
        {/* Header */}
        <div className="flex items-center h-[69px] md:h-[85px] px-4 relative">
          <span className="text-gray-900 dark:text-white text-2xl font-bold icon-button relative group">
            <MdOutlineAdd className="text-white text-2xl" />
            {effectiveCollapsed && (
              <span className={`fixed left-[4.5rem] px-3 py-2 bg-gray-800 dark:bg-[#2C2C2C] text-white text-sm rounded-md transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap translate-x-[-20px] group-hover:translate-x-0 z-[9999] shadow-lg`}>
                Create New
              </span>
            )}
          </span>
          <span className={`ml-2 text-xl font-semibold text-gray-900 dark:text-white transition-opacity duration-300 ${effectiveCollapsed ? 'hidden' : 'inline'}`}>
            PlusFive
          </span>

          {!isMobile && (
            <button
              onClick={toggleDesktopSidebar}
              className="flex absolute -right-3 top-7 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-1 shadow-lg z-[101]"
            >
              {isCollapsed ? <MdChevronRight size={16} /> : <MdChevronLeft size={16} />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto" onClick={() => isMobile && setIsMobileMenuOpen(false)}>
          <ul className="space-y-3 px-2 list-none">
            {navLinks.map((link) => (
              <SidebarNavItem
                key={link.to}
                {...link}
                isCollapsed={effectiveCollapsed}
              />
            ))}
          </ul>
        </nav>

        {/* Upgrade Plan Card */}
        <div className={`text-gray-700 dark:text-white transition-opacity duration-300 ${effectiveCollapsed ? 'hidden' : 'block'} p-4`}>
          <UpgradeCard />
        </div>

        {/* Logout */}
        <div className="relative m-3">
          <button onClick={handleLogout} className="w-full">
            <SidebarNavItem
              onClick={handleLogout}
              icon={MdLogout}
              label="Logout"
              isCollapsed={effectiveCollapsed}
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar; 