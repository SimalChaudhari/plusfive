import React, { useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'
import { CommonButton } from '../index';
import en from '../../i18/en.json';
import he from '../../i18/he.json';

function LandingHeader({ language }) {
    // Language-based text selection
    const t = language === 'he' ? he.header : en.header;
    // State for mobile menu
    const [menuOpen, setMenuOpen] = useState(false);
    // Alert handler for nav links
    const handleNavClick = (label) => {
        alert(`You clicked ${label}`);
        setMenuOpen(false); // Close menu on mobile after click
    };

    const menuItems = t.menuItems || [
        { label: 'Home', href: '#' },
        { label: 'How It Works', href: '#' },
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Success Stories', href: '#' },
        { label: 'FAQ', href: '#' },
    ];

    // Helper function/component
    const renderMenu = (className) => (
        menuItems.map(item => (
            <li key={typeof item === 'string' ? item : item.label}>
                <a href={typeof item === 'string' ? '#' : item.href} onClick={() => handleNavClick(typeof item === 'string' ? item : item.label)} className={className}>
                    {typeof item === 'string' ? item : item.label}
                </a>
            </li>
        ))
    );

    return (
        // Header wrapper with transparent background, margin, and flex layout
        <header className="xl:w-[100%] w-[95%] flex items-center justify-between py-3 px-6 mx-2 xl:py-2 xl:px-10 xl:mx-0 fixed top-0 left-0 z-50 bg-white dark:bg-customGray xl:bg-transparent dark:xl:bg-transparent rounded-full shadow-md border border-gray-200 dark:border-customBorderColor xl:rounded-none xl:shadow-none xl:border-none" style={{ marginTop: '18px' }}>
            {/* Left: Logo and Brand Name */}
            <div className="flex items-center gap-2 md:gap-4">
                <span className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold icon-button relative group">
                    <MdOutlineAdd className="text-white text-xl md:text-2xl" />
                </span>
                <span className={`text-lg md:text-xl font-semibold text-gray-900 dark:text-white transition-opacity duration-300`}>
                    {t.brandName || 'PlusFive'}
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="flex-1 justify-center hidden xl:flex">
                <ul className="flex gap-7 bg-white dark:bg-customGray rounded-full px-7 py-5 shadow-sm border border-gray-200 dark:border-customBorderColor text-xl">
                    {renderMenu('px-5 py-3 rounded-full bg-gray-200 dark:bg-customIconBgColor text-gray-900 dark:text-white font-medium shadow-sm')}
                </ul>
            </nav>

            {/* Desktop Button */}
            <div className="hidden xl:block">
                <CommonButton
                    text={t.button || 'Start Free Trial'}
                    className=" !text-white rounded-lg px-4 py-2 font-bold text-xl"
                    type="submit"
                />
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="xl:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    {menuOpen ? <HiX className="text-3xl text-gray-900 dark:text-white" /> : <HiMenu className="text-3xl text-gray-900 dark:text-white" />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end xl:hidden">
                    <div className="w-3/4 max-w-xs bg-white dark:bg-customGray h-full shadow-lg p-6 flex flex-col gap-6 relative animate-slide-in">
                        {/* Close button absolute top-right */}
                        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl text-gray-700 dark:text-white focus:outline-none z-10">
                            <HiX />
                        </button>
                        <ul className="flex flex-col gap-4 text-lg mt-10">
                            {renderMenu('block px-4 py-2 rounded bg-gray-200 dark:bg-customIconBgColor text-gray-900 dark:text-white font-medium')}
                        </ul>
                        <CommonButton
                            text={t.button || 'Start Free Trial'}
                            className=" !text-white rounded-lg px-4 py-2 font-bold text-xl"
                            type="submit"
                        />
                    </div>
                </div>
            )}
        </header>
    )
}

export default LandingHeader
