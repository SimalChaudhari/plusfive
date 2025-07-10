import React, { useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'
import { CommonButton } from '../index';
import en from '../../i18/en.json';
import he from '../../i18/he.json';
import { useLocation } from 'react-router-dom';
import CommonDropDown from '../commonComponent/CommonDropDown';
import { useLanguage } from '../../context/LanguageContext';

function LandingHeader() {
    const { language, changeLanguage, languages } = useLanguage();
    const t = language === 'he' ? he.header : en.header;
    const menuItems = t.menuItems || [];
    const menuLinks = [
        { href: '/' },
        { href: '/#how-it-works' },
        { href: '/#features' },
        { href: '/#pricing' },
        { href: '/#success-stories' },
        { href: '/#faq' }
    ];

    // Helper function/component
    const location = useLocation();

    const renderMenu = (className) => (
        menuItems.map((label, idx) => {
            const href = menuLinks[idx]?.href || "#";
            const isActive = (href === '/' && location.pathname === '/') ||
                             (href !== '/' && location.hash === href.replace('/', ''));
            return (
                <li key={label}>
                    <a
                        href={href}
                        onClick={e => {
                            e.preventDefault();
                            handleNavClick(label, href);
                        }}
                        className={
                            className +
                            (isActive
                                ? ' border-2 border-gray-400 bg-gray-200 dark:bg-customIconBgColor'
                                : ' bg-transparent')
                        }
                    >
                        {label}
                    </a>
                </li>
            );
        })
    );

    // State for mobile menu
    const [menuOpen, setMenuOpen] = useState(false);
    // State for active tab
    const [activeTab, setActiveTab] = useState(menuItems[0]); // Default: Home

    // Alert handler for nav links
    const handleNavClick = (label, href) => {
        if (href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setMenuOpen(false);
    };

    const languageOptions = Object.entries(languages).map(([value, label]) => ({
        value,
        label,
    }));

    return (
        // Header wrapper with transparent background, margin, and flex layout
        <header className="xl:w-[100%] w-[95%] flex items-center justify-between py-3 px-6 mx-2 xl:py-2 xl:px-10 xl:mx-0 fixed top-0 left-0 z-50 bg-white dark:bg-customGray xl:bg-transparent dark:xl:bg-transparent rounded-full shadow-md border border-gray-200 dark:border-customBorderColor xl:rounded-none xl:shadow-none xl:border-none" style={{ marginTop: '18px' }}>
            {/* Left: Logo and Brand Name */}
            <div className="flex items-center gap-2 md:gap-4">
                <span className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold icon-button relative group">
                    <MdOutlineAdd className="text-white text-xl md:text-2xl" />
                </span>
                <span className={`text-lg md:text-[24px] font-semibold text-gray-900 dark:text-white transition-opacity duration-300`}>
                    {t.brandName || 'PlusFive'}
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="flex-1 justify-center hidden xl:flex">
                <ul className="flex gap-7 bg-white dark:bg-customGray rounded-full px-7 py-5 shadow-sm border border-gray-200 dark:border-customBorderColor text-xl">
                    {renderMenu('px-5 py-3 rounded-full text-gray-900 dark:text-white font-medium ')}
                </ul>
            </nav>

            {/* Desktop Button */}
            <div className="hidden xl:flex items-center gap-4">
                <CommonDropDown
                    options={languageOptions}
                    value={language}
                    onChange={changeLanguage}
                    placeholder="Language"
                    className="min-w-[120px]"
                />
                <CommonButton
                    text={t.button || 'Start Free Trial'}
                    className="!text-white rounded-lg px-4 py-2 font-bold text-xl"
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
                            {renderMenu('block px-4 py-2 rounded text-gray-900 dark:text-white font-medium')}
                        </ul>
                        <CommonDropDown
                            options={languageOptions}
                            value={language}
                            onChange={changeLanguage}
                            placeholder="Language"
                            className="min-w-[120px] mb-4"
                        />
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
