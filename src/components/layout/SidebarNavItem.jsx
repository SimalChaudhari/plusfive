import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarNavItem = ({ to, icon: Icon, label, isCollapsed, specialPaths = [] }) => {
    const location = useLocation();

    const isActive = () => {
        return location.pathname === to || specialPaths.includes(location.pathname);
    };

    const getLinkClasses = () => {
        return `flex items-center w-full px-3 py-2 rounded-lg relative group transition-colors duration-200
        ${isActive()
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

    const getIconClasses = () => {
        return `text-[22px] lg:text-[20px] ${!isCollapsed && 'mr-3'} ${isActive() ? 'text-gray-900 dark:text-white' : ''}`;
    }

    return (
        <li className="relative list-none">
            <Link to={to} className={getLinkClasses()}>
                <Icon className={getIconClasses()} />
                <span className={`text-gray-700 dark:text-white transition-opacity duration-300 ${isCollapsed ? 'hidden' : 'inline'}`}>
                    {label}
                </span>
                {isCollapsed && (
                    <span className={getTooltipClasses()}>
                        {label}
                    </span>
                )}
            </Link>
        </li>
    );
};

export default SidebarNavItem; 