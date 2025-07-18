import React, { useState, useEffect } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'
import { CommonBorderButton, CommonButton, CommonDropDown } from '../index';
import en from '../../i18/en.json';
import he from '../../i18/he.json';
import { useLocation } from 'react-router-dom';
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

    // State for scroll trigger
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll event handler
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const scrollPercentage = (scrollTop / windowHeight) * 150;
            
            if (scrollPercentage >= 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                                ? ' border border-customGray bg-customBorderColor'
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
        <header className="lg:w-[100%] w-[95%] lg:min-w-[632px] flex items-center justify-between py-3 px-6 mx-2 lg:py-2 lg:px-10 lg:mx-0 fixed top-0 left-0 z-50 bg-customGray lg:bg-black rounded-full shadow-md border border-[#0000001A] lg:rounded-none lg:shadow-none lg:border-none transition-all duration-300 ease-in-out" 
        style={{ marginTop: isScrolled ? '0px' : '18px' }}
        >
            {/* Left: Logo and Brand Name */}
            <div className="flex items-center gap-2 md:gap-4">
            {/*
                <span className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold icon-button relative group">
                    <MdOutlineAdd className="text-white text-xl md:text-2xl" />
                </span>
                <span className={`text-lg md:text-24 font-semibold text-gray-900 dark:text-white transition-opacity duration-300`}>
            */}
                <span className={`text-lg md:text-32 font-testtiemposfine text-white transition-opacity duration-300`}>
                    {t.brandName || 'PlusFive'}
                </span>
            </div>

            {/* Desktop Nav */}
            <nav className="flex-1 justify-center hidden lg:flex">
                <ul className="flex xl:gap-7 lg:gap-3 md:gap-3 gap-2 bg-customGray rounded-full p-[12px] shadow-sm text-xl">
                    {renderMenu('xl:p-[8px] rounded-full text-white font-medium text-16')}
                </ul>
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center gap-4">
                <CommonDropDown
                    options={languageOptions}
                    value={language}
                    onChange={changeLanguage}
                    placeholder="Language"
                    className=""
                    fontSize="text-16"
                    isDarkMode={true}
                />
                <CommonBorderButton
                    text={'Start Free Trial'}
                    className="!text-white rounded-[8px] px-[16px] py-[10px] font-bold text-16"
                    type="submit"
                    onClick={() => window.location.href = '/login'}
                />
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="lg:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    {menuOpen ? <HiX className="text-3xl text-white" /> : <HiMenu className="text-3xl text-white" />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {menuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end lg:hidden">
                    <div className="w-3/4 max-w-xs bg-customGray h-full shadow-lg p-6 flex flex-col gap-6 relative animate-slide-in">
                        {/* Close button absolute top-right */}
                        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl text-white focus:outline-none z-10">
                            <HiX />
                        </button>
                        <ul className="flex flex-col gap-4 text-lg mt-10">
                            {renderMenu('block px-4 py-2 rounded text-white font-medium')}
                        </ul>
                        <CommonDropDown
                            options={languageOptions}
                            value={language}
                            onChange={changeLanguage}
                            placeholder="Language"
                            className="min-w-[120px] mb-4"
                            fontSize="text-16"
                            isDarkMode={true}
                        />
                        <CommonBorderButton
                            text={t.button || 'Start Free Trial'}
                            className=" !text-white rounded-lg px-4 py-2 font-bold text-xl"
                            type="submit"
                            onClick={() => window.location.href = '/login'}
                        />
                    </div>
                </div>
            )}
        </header>
    )
}

export default LandingHeader
