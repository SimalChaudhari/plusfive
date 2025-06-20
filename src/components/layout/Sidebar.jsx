import { MdQrCode2, MdShare, MdPeople, MdAnalytics, 
         MdCreditCard, MdSettings, MdHelp, MdLogout,
         MdChevronLeft, MdChevronRight, 
         MdOutlineAdd} from 'react-icons/md';
import { IoHomeOutline } from 'react-icons/io5';
import UpgradeCard from './UpgradeCard';
import SidebarNavItem from './SidebarNavItem';

const navLinks = [
  { to: '/dashboard', icon: IoHomeOutline, label: 'Dashboard', specialPaths: ['/'] },
  { to: '/qr-management', icon: MdQrCode2, label: 'QR Management' },
  { to: '/referral', icon: MdShare, label: 'Referral Program' },
  { to: '/customers', icon: MdPeople, label: 'Customer Management' },
  { to: '/analytics', icon: MdAnalytics, label: 'Analytics' },
  { to: '/subscription-and-billing', icon: MdCreditCard, label: <>Subscription <span className="font-sans">&</span> Billing</> },
  { to: '/settings', icon: MdSettings, label: 'Account Settings' },
  { to: '/support', icon: MdHelp, label: <>Support <span className="font-sans">&</span> Help</> },
];

const Sidebar = ({ isCollapsed, onCollapse }) => {
  const toggleSidebar = () => {
    onCollapse(!isCollapsed);
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
          {navLinks.map((link) => (
            <SidebarNavItem 
              key={link.to}
              {...link}
              isCollapsed={isCollapsed}
            />
          ))}
        </ul>
      </nav>

      {/* Upgrade Plan Card */}
      <div className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'block'} p-4`}>
        <UpgradeCard />
      </div>

      {/* Logout */}
      <div className="relative m-3">
        <SidebarNavItem
          to="/logout"
          icon={MdLogout}
          label="Logout"
          isCollapsed={isCollapsed}
        />
      </div>
    </aside>
  );
};

export default Sidebar; 